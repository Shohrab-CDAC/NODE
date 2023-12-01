const express = require("express");
const app = express();
const con = require("./config")
// GET API
app.get("/", (req, resp) => {
    //resp.send("route done")
    con.query("select * from emp", (err, result) => {
        if (err) {
            resp.send("error in getting data from db")
        }
        else {
            resp.send(result)
        }
    })
})
// POST API
app.post("/", (req, resp) => {
    const data = { "Empno": "007", "Ename": "abx", "Sal": 99000, "City": "pimpri", "Dob": "1995-08-15" };
    con.query('INSERT INTO emp SET ?', data, (err, result, field) => {
        if (err) {
            resp.send("error in posting data into db")
        }
        else {
            resp.send(result)
        }
    })
});

//PUT API
app.put("/", (req, resp) => {
    const data = ["008", "ttt", 21000, "nimpri", "1996-08-25"];
    con.query('UPDATE emp SET Empno=?,Ename=?,Sal=?,City=?,Dob=?', data, (err, result, field) => {
        if (err) {
            resp.send("error in updating data into db")
        }
        else {
            resp.send(result)
        }
    })
});

// DELETE API
app.delete("/:EmpId", (req, resp) => {
    con.query('DELETE FROM Employee WHERE EmpId =' + req.params.EmpId, (err, result, field) => {
        if (err) {
            resp.send("error in deleting data from db")
        }
        else {
            resp.send(result)
        }
    })
});
app.listen(5000, () => {
    console.log("server started at port 5000")
})