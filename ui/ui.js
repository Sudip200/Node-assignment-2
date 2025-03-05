const errorMessage = (message, givenRoute = "/", routeName = "Go back") => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Error Message</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #121212; 
              color: #ffffff; 
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
  
            #container {
              background-color: #1f1f1f; 
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              width: 80%;
              max-width: 500px;
              text-align: center;
            }
  
            h1 {
              color: #ff4081; 
              font-size: 24px;
              margin-bottom: 20px;
            }
  
            p {
              color: #f44336; 
              font-size: 18px;
              margin-top: 0;
            }
  
            .emoji {
              font-size: 36px;
              margin-right: 10px;
            }
            button{
                background-color: #ff4081;
                color: #ffffff;
                padding: 10px;
                border: none;
                border-radius: 5px;
                font-size: 18px;
                cursor: pointer;
                margin-top: 20px;
              }
          </style>
        </head>
        <body>
          <div id="container">
            <h1>❌ Error</h1>
            <p class="emoji">⚠️ ${message}</p>
             <a href='${givenRoute}'>${routeName}</a>
          </div>
        </body>
      </html>
    `;
};
const welcomeMessage = (message) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Normal Message</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #121212; 
              color: #ffffff; /* White text */
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
  
            #container {
              background-color: #1f1f1f; 
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              width: 80%;
              max-width: 500px;
              text-align: center;
            }
  
            h1 {
              color: #ff4081; 
              font-size: 24px;
              margin-bottom: 20px;
            }
  
            p {
              color: #66bb6a;
              font-size: 18px;
              margin-top: 0;
            }
  
            .emoji {
              font-size: 36px;
              margin-right: 10px;
            }
              
             
          </style>
        </head>
        <body>
          <div id="container">
           
            <p class="emoji">🎉 ${message}</p>
          
          </div>
        </body>
      </html>
    `;
};

const normalMessage = (message, givenRoute = "/", routeName = "Go Back") => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Normal Message</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #121212; 
              color: #ffffff; /* White text */
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
  
            #container {
              background-color: #1f1f1f; 
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              width: 80%;
              max-width: 500px;
              text-align: center;
            }
  
            h1 {
              color: #ff4081; 
              font-size: 24px;
              margin-bottom: 20px;
            }
  
            p {
              color: #66bb6a; 
              font-size: 18px;
              margin-top: 0;
            }
  
            .emoji {
              font-size: 36px;
              margin-right: 10px;
            }
             
             
          </style>
        </head>
        <body>
          <div id="container">
            <h1>✅ Success</h1>
            <p class="emoji">🎉 ${message}</p>
              <a href='${givenRoute}'>${routeName}</a>
          </div>
        </body>
      </html>
    `;
};
const listUsersdata = (employearray) => {
  console.log(employearray);
  let employepart = "";
  let firstHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>User List</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #121212; 
              color: #ffffff; /* White text */
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              flex-direction: column;
            }
            #container {
              background-color: #1f1f1f; 
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              width: 80%;
              max-width: 500px;
              text-align: center;
            }
            h1 {
              color: #ff4081; 
              font-size: 24px;
              margin-bottom: 20px;
            }
            .user {
              background-color: #333333;
              color: #ffffff;
              padding: 10px;
              margin: 10px 0;
              border-radius: 5px;
              display: flex;
              justify-content: space-between;
              font-size: 18px;
              align-items: center;
            }
            .no-users {
              color: #f44336; 
              font-size: 18px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div id="container">
    `;

  // Check if there are users in the array
  if (employearray.length === 0) {
    firstHtml += `
        <p class="no-users">No users found. Please add users.</p>
      `;
  } else {
    firstHtml += `<h1>List of Users</h1>`;

    // Loop through the users and generate HTML for each one
    for (let user of employearray) {
      let htmlpart = `
          <div class="user">
            <span>${user.firstName} ${user.lastName}</span>
          </div>
        `;
      employepart += htmlpart;
    }

    firstHtml += employepart;
  }

  firstHtml += `
          </div>
        </body>
      </html>
    `;

  return firstHtml;
};

module.exports = {
  errorMessage,
  normalMessage,
  listUsersdata,
  welcomeMessage,
};
