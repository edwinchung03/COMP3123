const express = require('express');
const app = express();
const router = express.Router();

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  res.sendfile('home.html')
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  const users = require('./user.json')
  res.json(users);
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.use(express.json());

router.post('/login', (req,res) => {
  const users = require('./user.json')

  const {username, password} = req.body;

  if (username !== users.username){
    return res.json({
      status: false,
      message: "User Name is invalid"
    })
  }

  if (password !== users.password){
    return res.json({
      status: false,
      message: "Password is invalid"
    })
  }

  return res.json({
    status: true,
    message: "User is valid"
  })
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const {username} = req.body;

  const htmlResponse = `<b>${username} successfully logout.<b>`

  res.send(htmlResponse)
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.error(err);
  res.status(500).send("Server error")
});

app.use('/', router);

app.listen(process.env.port || 8085);

console.log('Web Server is listening at port '+ (process.env.port || 8085));