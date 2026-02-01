# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to receive contact form submissions.

## Steps to Set Up

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Portfolio Contact Submissions"
4. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Subject`
   - Column E: `Message`

### 2. Create Apps Script
1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append a new row with the data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data received'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Save the project (give it a name like "Contact Form Handler")

### 3. Deploy the Apps Script
1. Click on **Deploy → New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure the deployment:
   - **Description**: Contact Form Submission Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script (click "Authorize access")
6. Review permissions and click "Allow"
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

### 4. Update Your React App
1. Open `src/sections/Contact.tsx`
2. Find this line (around line 46):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL

### 5. Test the Integration
1. Run your portfolio website
2. Go to the contact section
3. Fill out and submit the form
4. Check your Google Sheet - you should see a new row with the submission data!

## Security Notes
- The Apps Script is set to "Anyone" access because `mode: 'no-cors'` is used in the fetch request
- Only you have access to view the Google Sheet and the submitted data
- You can add additional validation in the Apps Script if needed
- Consider adding spam protection (like reCAPTCHA) if needed

## Troubleshooting

### Form submits but no data appears in Sheet
- Check that the Web App URL is correct in Contact.tsx
- Make sure the Apps Script is deployed as a "Web app"
- Check that "Who has access" is set to "Anyone"
- Look at the Apps Script execution logs (View → Executions)

### Authorization errors
- Re-authorize the script in the deployment settings
- Make sure you're logged into the correct Google account

### CORS errors
- The `mode: 'no-cors'` should handle this
- If you still see errors, check the browser console
- Make sure the script is deployed and the URL is correct

## Viewing Submissions
Simply open your Google Sheet to view all submissions in real-time!

You can also:
- Set up email notifications when new rows are added
- Create charts and analytics from the data
- Export the data as needed
- Share the sheet with team members (keeping it private)
