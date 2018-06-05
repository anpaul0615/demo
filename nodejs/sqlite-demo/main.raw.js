const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db2.sqlite');

db.serialize(()=>{
    
    // Create Table
    db.run("CREATE TABLE lorem (info TEXT)");

    // Insert Data
    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run(`Ipsum ${i}`);
    }
    stmt.finalize();

    // Select Data
    db.each("SELECT rowid AS id, info FROM lorem", (err,row)=>{
        console.log(`${row.id} : ${row.info}`);
    });
});

db.close();