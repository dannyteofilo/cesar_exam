# cesar_exam
api to encode a message with the cesar algorithm
## Building
Clone git repository:<br>
```$ git clone https://github.com/dannyteofilo/cesar_exam.git```  
Install dependencies:<br>
```$ npm install```<br>
run api:<br>
```$ npm start```
##Example
```javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3800/api/cesar',
  headers: 
   { 'Postman-Token': '877fa61d-11d8-c0b3-8f19-3c97964aa2c3',
     'Cache-Control': 'no-cache',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: { secret: 'SRYVPVQNQRF' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

