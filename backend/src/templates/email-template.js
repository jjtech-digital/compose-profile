const emailTemplate = (name, email, message, subject) => {
  return {
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  color: #2d3748;
                  line-height: 1.7;
                  background-color: #f7fafc;
                  padding: 30px;
                  margin: 0;
              }
              .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 40px;
                  border-radius: 12px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }
              .email-header {
                  text-align: center;
                  margin-bottom: 35px;
                  padding-bottom: 20px;
                  border-bottom: 2px solid #edf2f7;
              }
              .email-header h3 {
                  color: #2b6cb0;
                  font-size: 24px;
                  margin: 0;
                  font-weight: 600;
              }
              .email-body {
                  margin-bottom: 30px;
                  padding: 0 10px;
              }
              .email-body p {
                  font-size: 15px;
                  margin: 12px 0;
                  color: #4a5568;
              }
              .email-body strong {
                  color: #2d3748;
                  font-weight: 600;
              }
              blockquote {
                  background-color: #f8fafc;
                  border-left: 4px solid #3182ce;
                  margin: 20px 0;
                  padding: 15px 20px;
                  border-radius: 0 8px 8px 0;
                  font-style: italic;
                  color: #4a5568;
              }
              .message-field {
                  margin: 15px 0;
                  padding: 15px;
                  background-color: #f8fafc;
                  border-radius: 8px;
              }
              .message-label {
                  display: inline-block;
                  font-weight: 600;
                  min-width: 80px;
                  color: #2d3748;
              }
              .email-footer {
                  text-align: center;
                  margin-top: 35px;
                  padding-top: 25px;
                  border-top: 2px solid #edf2f7;
                  font-size: 14px;
                  color: #718096;
              }
              .company-name {
                  color: #2b6cb0;
                  font-weight: 600;
                  font-size: 16px;
                  margin-top: 8px;
              }
              .highlight {
                  color: #2b6cb0;
                  font-weight: 500;
              }
              @media (max-width: 600px) {
                  body {
                      padding: 15px;
                  }
                  .email-container {
                      padding: 25px;
                  }
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="email-header">
                  <h3>🔔 New Inquiry: ${subject}</h3>
              </div>
              <div class="email-body">
                  <p><strong>Hello Admin,</strong></p>
                  <p>You have received a new message from <span class="highlight">${name}</span>.</p>

                  <div class="message-field">
                      <p><span class="message-label">Name:</span> ${name}</p>
                      <p><span class="message-label">Email:</span> ${email}</p>
                      <p><span class="message-label">Subject:</span> ${subject}</p>
                  </div>

                  <p><strong>Message Content:</strong></p>
                  <blockquote>${message}</blockquote>
              </div>
              <div class="email-footer">
                  <p>This message was sent via the contact form</p>
                  <p class="company-name">Compose Tech Services</p>
              </div>
          </div>
      </body>
      </html>
    `,
  };
};

module.exports = emailTemplate;
