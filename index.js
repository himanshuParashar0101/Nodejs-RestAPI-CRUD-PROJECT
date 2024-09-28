const mysql= require('mysql2');
const { faker } = require('@faker-js/faker');
const express= require('express');
const app = express();
const path = require("path");

const { v4: uuidv4 } = require("uuid");


const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "4122",
  });

  let getRandomUser = () => {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
    ];
  };


  //to show total number of user

    app.get("/" ,(req,res)=> {
      let q = `SELECT COUNT(*) FROM user`;
      try{
        connection.query(q, (err,result)=> {
          if(err)throw err;
          let count = result[0]["COUNT(*)"];
          res.render("home.ejs", {count});
        });
      }
      catch(err){
        console.log(err);
        res.send("some error in db");
      }

    });


    // to fetch and show all userid , name , email of all the users

    app.get("/user" ,(req,res)=> {
      let q = `SELECT * FROM user`;
      try{
        connection.query(q, (err,users)=>{
          if(err)throw err;
          console.log(users);
          res.render("showuser.ejs", {users});
        });
      }catch(err){
        res.send("some error occurred");
    }
  });


  //edit route

  app.get("/user/:id/edit", (req, res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
      connection.query(q, (err, result)=>{
        if(err) throw err;
        let user  = result[0];
        res.render("edit.ejs" , { user });
      });
    }catch(err){
      console.log(err);
      res.send("some error occurred");
    }
  });


  //update DB route


  app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;

    try {
        // Parameterized query to avoid SQL injection
        let q = 'SELECT * FROM user WHERE id = ?';
        connection.query(q, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Some error occurred");
            }
            if (result.length === 0) {
                return res.status(404).send("User not found");
            }

            let user = result[0];

            if (formPass !== user.password) {
                return res.status(401).send("Wrong password");
            } else {
                // Parameterized update query
                let q2 = 'UPDATE user SET username = ? WHERE id = ?';
                connection.query(q2, [newUsername, id], (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send("Some error occurred");
                    }

                    return res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send("Some error occurred");
    }
});


// added new user
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});


//delete user

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080", () => {
  console.log("server running on port 8080");
});


    //   let data=[];
//   for(let i=0; i<=100;i++){
//     data.push(getRandomUser());  //generating 101 random fake users
//   }
// //inserting new data
//   let q="INSERT INTO user (id, username, email, password) VALUES ?";
//   let users= [["123b", "123_newuserb", "123_newuserb@gamil.com" , "abcb"],
//               ["123c", "123_newuserc", "123_newuserc@gamil.com" , "abcc"]];
  // try{
  //   connection.query(q,[data] , (err, results) => {
  //       if (err) throw err;
  //       console.log(results);
  //   });
  //   } catch (err) {
  //       console.log(err);
  //   }
  //   connection.end();
