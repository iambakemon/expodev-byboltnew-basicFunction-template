import { Platform } from 'react-native';

interface WebSocketMessage {
  type: string;
  data: any;
}

class WebSocketManager {
  private ws: WebSocket | null = null;
  private url: string;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private listeners: Map<string, ((data: any) => void)[]> = new Map();

  constructor(url: string) {
    this.url = url;
  }

  connect() {
    try {
      // Check if we're running in a secure context and adjust the WebSocket protocol accordingly
      const isSecure = Platform.OS === 'web' && window.location.protocol === 'https:';
      const wsProtocol = isSecure ? 'wss' : 'ws';
      const wsUrl = `${wsProtocol}://${this.url.replace(/^(ws|wss):\/\//, '')}`;
      
      this.ws = new WebSocket(wsUrl);
      
      this.ws.onopen = () => {
        console.log('WebSocket接続が確立されました');
        this.reconnectAttempts = 0;
        this.emit('connection', { status: 'connected' });
      };

      this.ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.emit(message.type, message.data);
        } catch (error) {
          console.error('メッセージの解析に失敗しました:', error);
        }
      };

      this.ws.onclose = () => {
        console.log('WebSocket接続が切断されました');
        this.emit('connection', { status: 'disconnected' });
        this.reconnect();
      };

      this.ws.onerror = (error) => {
        console.error('WebSocketエラー:', error);
        this.emit('error', error);
      };
    } catch (error) {
      console.error('WebSocket接続エラー:', error);
    }
  }

  private reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`再接続を試みています... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      setTimeout(() => this.connect(), 3000);
    }
  }

  send(type: string, data: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      const message: WebSocketMessage = { type, data };
      this.ws.send(JSON.stringify(message));
    } else {
      console.error('WebSocket接続が確立されていません');
    }
  }

  on(type: string, callback: (data: any) => void) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type)?.push(callback);
  }

  private emit(type: string, data: any) {
    const callbacks = this.listeners.get(type) || [];
    callbacks.forEach(callback => callback(data));
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export const createWebSocketManager = (deviceIP: string) => {
  const wsUrl = `${deviceIP}:81`;
  return new WebSocketManager(wsUrl);
};