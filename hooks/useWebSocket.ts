import { useState, useEffect } from 'react';
import { createWebSocketManager } from '@/utils/websocket';

export function useWebSocket(deviceIP: string) {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ws = createWebSocketManager(deviceIP);

    ws.on('connection', (data) => {
      setIsConnected(data.status === 'connected');
      if (data.status === 'connected') {
        setError(null);
      }
    });

    ws.on('error', (error) => {
      setError('接続エラーが発生しました');
    });

    ws.connect();

    return () => {
      ws.disconnect();
    };
  }, [deviceIP]);

  return { isConnected, error };
}