const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

console.log('Express app initialized and middleware set up.');

// Configure your email transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'southernbayexim123@gmail.com',
    pass: 'elnf qaky pvac lzyb'
  }
});
console.log('Nodemailer transporter configured.');

app.post('/api/send-mail', async (req, res) => {
  console.log('POST /api/send-mail called.');
  const { email, product, link } = req.body;
  console.log('Request body:', req.body);

  if (!email || !product || !link) {
    console.log('Missing required fields.');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    console.log('Attempting to send email...');
    await transporter.sendMail({
      from: `"User" <${email}>`, // Set user's email as the sender
      to: 'southernbayexim123@gmail.com', // Always send to your own address
      subject: `Product Enquiry: ${product}`,
      text: `A user has requested information.\n\nUser Email: ${email}\nProduct: ${product}\nLink: ${link}`
    });
    console.log('Email sent successfully to:', email);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));