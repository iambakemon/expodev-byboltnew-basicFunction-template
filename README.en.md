# Smart Device Controller

A web application for easy control of smart devices

English | [日本語](./README.md)

## Overview

This application provides an interface for easy control of IoT devices. It features various functionalities including Wi-Fi and Bluetooth connection management, and QR code scanning.

## Key Features

- 🏠 **Home Screen**: Device status check and quick access
- 📱 **QR Scan**: Quick device information reading (mobile only)
- 📶 **Wi-Fi Management**: Device Wi-Fi connection settings
- 🔷 **Bluetooth Connection**: Bluetooth communication with devices
- ⚙️ **Settings**: Application and device settings management

## Development Environment Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Expo CLI

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Environment Variables Setup

1. Create `.env` file:
```bash
cp .env.example .env
```

2. Set required environment variables:
```
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_API_KEY=your_api_key
```

## How to Use the Application

### 1. Home Screen

- Check device connection status
- Execute test communication
- Change language settings (Japanese/English)
- Toggle dark/light mode

### 2. QR Scan (Mobile Only)

- Scan device QR codes
- Automatic connection setup

### 3. Wi-Fi Settings

- Set device IP address
- Check Wi-Fi connection status
- Establish/disconnect connections

### 4. Bluetooth Settings

- Detect Bluetooth devices
- Manage pairing
- Check connection status

### 5. Settings

- View device information
- Manage application settings

## Platform-Specific Notes

### Web Browser

- QR scanning is not available
- Bluetooth functionality is limited
- Wi-Fi features are partially limited

### Mobile (iOS/Android)

- All features are available
- Native features (camera, Bluetooth) are accessible

## Troubleshooting

### Common Issues and Solutions

1. Cannot connect to device
   - Verify IP address is correct
   - Confirm device is on the same network
   - Check firewall settings

2. QR scan not working
   - Ensure using mobile app
   - Check camera permissions are granted

3. Bluetooth connection issues
   - Verify Bluetooth is enabled
   - Check if device is discoverable

## Support

If you encounter issues or have questions, you can get support through:

- Creating an Issue
- Posting in the project discussion forum
- Sending a support email

## License

This project is released under the MIT License.