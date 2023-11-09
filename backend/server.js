const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "conta"
})   

app.post('/usuarios', (req, res)=>{
    const {email, senha, acao} = req.body;
    if(acao === "registro"){
    const sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
    db.query(sql, [email, senha], (err, data) => {
        if(err) {
            return res.json("Erro ao cadastrar");
        }
            return res.json(data)
    })
    } else if (acao === "logar"){
        const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
        db.query(sql, [req.body.email, req.body.senha], (err, data) => {
            if(err) return res.json("Falha ao entrar");
            if(data.length > 0){
                return res.json("Conta válida")
            } else {
                return res.json("Conta inválida")
            }
    })
    }
})


app.listen(8081, ()=>{
    console.log("Listening...")
})