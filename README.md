# Smart Device Controller

スマートデバイスを簡単に制御できるWebアプリケーション

[English](./README.en.md) | 日本語

## 概要

このアプリケーションは、IoTデバイスの制御を簡単に行うためのインターフェースを提供します。Wi-Fi、Bluetooth接続の管理やQRコードスキャンなど、様々な機能を備えています。

## 主な機能

- 🏠 **ホーム画面**: デバイスの状態確認とクイックアクセス
- 📱 **QRスキャン**: デバイス情報の素早い読み取り（モバイル専用）
- 📶 **Wi-Fi管理**: デバイスのWi-Fi接続設定
- 🔷 **Bluetooth接続**: デバイスとのBluetooth通信
- ⚙️ **設定**: アプリケーションと端末の設定管理

## 開発環境のセットアップ

### 必要条件

- Node.js (v18以上)
- npm (v9以上)
- Expo CLI

### インストール手順

1. リポジトリのクローン:
```bash
git clone <repository-url>
cd <project-directory>
```

2. 依存関係のインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

### 環境変数の設定

1. `.env`ファイルを作成:
```bash
cp .env.example .env
```

2. 必要な環境変数を設定:
```
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_API_KEY=your_api_key
```

## アプリケーションの使用方法

### 1. ホーム画面

- デバイスの接続状態を確認
- テスト通信の実行
- 言語設定の変更（日本語/英語）
- ダークモード/ライトモードの切り替え

### 2. QRスキャン（モバイル専用）

- デバイスのQRコードをスキャン
- 接続情報の自動設定

### 3. Wi-Fi設定

- デバイスのIPアドレスを設定
- Wi-Fi接続状態の確認
- 接続の確立/切断

### 4. Bluetooth設定

- Bluetoothデバイスの検出
- ペアリングの管理
- 接続状態の確認

### 5. 設定

- デバイス情報の確認
- アプリケーション設定の管理

## プラットフォーム別の注意事項

### Webブラウザ

- QRスキャン機能は利用できません
- Bluetooth機能は制限されます
- Wi-Fi機能は一部制限されます

### モバイル（iOS/Android）

- すべての機能が利用可能
- ネイティブ機能（カメラ、Bluetooth）が使用可能

## トラブルシューティング

### よくある問題と解決方法

1. デバイスに接続できない場合
   - IPアドレスが正しいか確認
   - デバイスが同じネットワークに接続されているか確認
   - ファイアウォール設定を確認

2. QRスキャンが機能しない
   - モバイルアプリを使用しているか確認
   - カメラの権限が許可されているか確認

3. Bluetooth接続の問題
   - Bluetoothが有効になっているか確認
   - デバイスが検出可能な状態か確認

## サポート

問題が発生した場合や質問がある場合は、以下の方法でサポートを受けることができます：

- Issueの作成
- プロジェクトのディスカッションフォーラムへの投稿
- サポートメールの送信

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。