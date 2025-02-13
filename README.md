# Node.js SMPP Client

A simple Node.js SMPP client for sending SMS messages using the SMPP protocol.

## Description

This application provides a basic implementation of an SMPP client using Node.js. It allows you to send SMS messages through an SMPP server connection.

## Prerequisites

- Node.js (version 12.0 or higher recommended)
- NPM (Node Package Manager)
- Access to an SMPP server

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jamesnjovu/smpp_client.git
cd smpp_client
```
2. Install dependencies
```bash
npm install
```

## Configuration

Edit `send_sms.js` and update the following parameters:

- SMPP server connection details:
  ```javascript
  smpp.connect('smpp://127.0.0.1:2775') // Change to your SMPP server address
  ```

- Authentication credentials:
  ```javascript
  system_id: 'username'  // Your SMPP username
  password: 'password'   // Your SMPP password
  ```

## Usage

To send an SMS, run:
```bash
node send_sms.js
```
The default script will:
1. Connect to the SMPP server
2. Bind as a transmitter
3. Send a SMS message to the specified destination
4. Close the connection
