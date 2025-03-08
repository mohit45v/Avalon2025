// Create a new file for email templates
export const emailTemplates = {
  // Template for Query Responses
  queryResponse: (name, originalQuery, reply) => ({
    subject: `Response to Your Query - Avalon 2025`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Avalon 2025 Response</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #030014; color: #ffffff; font-family: 'Arial', sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border-radius: 16px; overflow: hidden; margin-top: 20px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 0; text-align: center; background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%);">
              <img src="https://avalontechfest.in/logo.png" alt="Avalon Logo" style="width: 120px; margin-bottom: 20px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; background: linear-gradient(to right, #9333ea, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Response to Your Query
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #e2e8f0; font-size: 18px; margin-bottom: 30px;">
                Dear ${name},
              </p>

              <div style="background: rgba(147, 51, 234, 0.1); border-left: 4px solid #9333ea; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 14px;">Your Query:</p>
                <p style="color: #e2e8f0; margin: 0; font-size: 16px; line-height: 1.6;">${originalQuery}</p>
              </div>

              <div style="background: rgba(234, 88, 12, 0.1); border-left: 4px solid #ea580c; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 14px;">Our Response:</p>
                <p style="color: #e2e8f0; margin: 0; font-size: 16px; line-height: 1.6;">${reply}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          ${commonEmailFooter}
        </table>
      </body>
      </html>
    `
  }),

  // Template for Registration Verification
  registrationVerified: (name, event, details) => ({
    subject: `Registration Verified - Avalon 2025`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Verified - Avalon 2025</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #030014; color: #ffffff; font-family: 'Arial', sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border-radius: 16px; overflow: hidden; margin-top: 20px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 0; text-align: center; background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%);">
              <img src="https://avalontechfest.in/logo.png" alt="Avalon Logo" style="width: 120px; margin-bottom: 20px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; background: linear-gradient(to right, #9333ea, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Registration Verified!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #e2e8f0; font-size: 18px; margin-bottom: 30px;">
                Dear ${name},
              </p>

              <div style="background: rgba(147, 51, 234, 0.1); border-left: 4px solid #9333ea; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="color: #e2e8f0; margin: 0 0 15px 0; font-size: 20px;">Registration Details</h2>
                <p style="color: #e2e8f0; margin: 0 0 10px 0; font-size: 16px;">Event: ${event}</p>
                <p style="color: #e2e8f0; margin: 0 0 10px 0; font-size: 16px;">Date: March 15-17, 2025</p>
                <p style="color: #e2e8f0; margin: 0; font-size: 16px;">Venue: Terna Engineering College, Nerul</p>
              </div>

              <div style="background: rgba(234, 88, 12, 0.1); border-left: 4px solid #ea580c; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="color: #e2e8f0; margin: 0 0 15px 0; font-size: 20px;">Important Information</h2>
                <ul style="color: #e2e8f0; margin: 0; padding-left: 20px; font-size: 16px; line-height: 1.6;">
                  <li>Please arrive 30 minutes before your event time</li>
                  <li>Bring your college ID card</li>
                  <li>Keep this email handy for verification</li>
                </ul>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          ${commonEmailFooter}
        </table>
      </body>
      </html>
    `
  }),

  // Template for Registration Rejection
  registrationRejected: (name, event, reason) => ({
    subject: `Registration Update Required - Avalon 2025`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Update Required - Avalon 2025</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #030014; color: #ffffff; font-family: 'Arial', sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border-radius: 16px; overflow: hidden; margin-top: 20px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 0; text-align: center; background: linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%);">
              <img src="https://avalontechfest.in/logo.png" alt="Avalon Logo" style="width: 120px; margin-bottom: 20px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; background: linear-gradient(to right, #9333ea, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Registration Update Required
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #e2e8f0; font-size: 18px; margin-bottom: 30px;">
                Dear ${name},
              </p>

              <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="color: #e2e8f0; margin: 0 0 15px 0; font-size: 20px;">Action Required</h2>
                <p style="color: #e2e8f0; margin: 0; font-size: 16px; line-height: 1.6;">
                  Your registration for ${event} requires attention. Please update your registration with the following:
                </p>
                <ul style="color: #e2e8f0; margin: 15px 0 0 0; padding-left: 20px; font-size: 16px; line-height: 1.6;">
                  ${reason}
                </ul>
              </div>

              <div style="background: rgba(147, 51, 234, 0.1); border-left: 4px solid #9333ea; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="color: #e2e8f0; margin: 0 0 15px 0; font-size: 20px;">Next Steps</h2>
                <ol style="color: #e2e8f0; margin: 0; padding-left: 20px; font-size: 16px; line-height: 1.6;">
                  <li>Review your registration details</li>
                  <li>Make the necessary updates</li>
                  <li>Resubmit your registration</li>
                </ol>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          ${commonEmailFooter}
        </table>
      </body>
      </html>
    `
  })
};

// Common footer for all emails
const commonEmailFooter = `
  <!-- Contact Info -->
  <tr>
    <td style="padding: 0 30px 30px;">
      <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; text-align: center;">
        <p style="color: #94a3b8; margin: 0 0 10px 0; font-size: 14px;">
          Need help? Contact us at:
        </p>
        <a href="mailto:avalon@ternaengg.ac.in" style="color: #9333ea; text-decoration: none; font-size: 16px;">
          avalon@ternaengg.ac.in
        </a>
      </div>
    </td>
  </tr>

  <!-- Social Links -->
  <tr>
    <td style="padding: 0 30px 30px;">
      <div style="text-align: center; padding-top: 30px; border-top: 1px solid rgba(147, 51, 234, 0.2);">
        <p style="color: #94a3b8; margin-bottom: 15px;">Follow us on social media:</p>
        <div>
          <a href="https://instagram.com/avalonterna" style="display: inline-block; margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style="width: 24px; height: 24px;">
          </a>
          <a href="https://x.com/avalon_tec" style="display: inline-block; margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style="width: 24px; height: 24px;">
          </a>
          <a href="https://youtube.com/@avalontechfest8898" style="display: inline-block; margin: 0 10px;">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube" style="width: 24px; height: 24px;">
          </a>
        </div>
      </div>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%); padding: 20px; text-align: center;">
      <p style="color: #94a3b8; margin: 0; font-size: 14px;">
        © 2025 Avalon TechFest | Terna Engineering College
      </p>
    </td>
  </tr>
`; 