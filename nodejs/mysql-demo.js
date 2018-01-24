const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin1234',
  database : 'HR'
});

connection.connect(function(err){
  if(!err) console.log("Database is connected ..\n");
  else console.log("Error connecting database ..\n");
});

connection.query('SELECT * FROM DEPT', function(err, rows, fields) {
  if(!err){
    for(var i=0; i<rows.length; i++){
      console.log("index::" +i + " :: " + rows[i].DEPTNO);
    }
  }else{
    console.log('Error while performing Query.');
  }

  connection.end();
});
