const { error } = require("console");
let mysql = require("mysql");


let con = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "",
    database : 'test'
});

con.connect((e)=>{
    if(e) throw error;
    console.log("connect");

    con.query('select * from mytable',(e,result)=>{
        result.forEach(element => {
            console.log(element.name)
        });
    })
})