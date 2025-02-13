const smpp = require('smpp');

const session = smpp.connect('smpp://127.0.0.1:2775'); // Change IP/port if needed

session.on('connect', () => {
    console.log('Connected to SMPP server');

    // Bind as a transmitter
    session.bind_transceiver({
        system_id: 'username', // Change to your SMPP username
        password: 'password'    // Change to your SMPP password
    }, (pdu) => {
        if (pdu.command_status === 0) {
            console.log('Successfully bound as a transceiver');

            // Send an SMS
            sendSMS('sourceAdd', '260978921730', 'Hello from Node.js SMPP client!');
        } else {
            console.error('Failed to bind:', pdu.command_status);
            session.close();
        }
    });
});

function sendSMS(from, to, message) {
    session.submit_sm({
        source_addr: from,
        destination_addr: to,
        short_message: message,
        data_coding: 0 // Ensure proper encoding (GSM-7)
    }, (pdu) => {
        if (pdu.command_status === 0) {
            console.log('SMS sent successfully, message_id:', pdu.message_id);
        } else {
            console.error('Failed to send SMS:', pdu.command_status);
        }
        session.close();
    });
}

// Handle session errors
session.on('error', (err) => {
    console.error('SMPP Error:', err);
});

// Handle session timeouts or disconnections
session.on('close', () => {
    console.log('SMPP session closed');
});
