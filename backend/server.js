const express = require('express')
const { body, validationResult } = require('express-validator');
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

app.post('/usuarios', 
[
  body('email').notEmpty().withMessage('O email é obrigatório').isEmail().withMessage('O e-mail não é válido'),
  body('senha').isLength({ min: 8 }).withMessage('A senha deve ter no mínimo 8 caracteres'),
],

async (req, res) => {

   // Verifica os resultados da validação
   const errors = validationResult(req);

   // Se houver erros, retorna uma resposta com os erros
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
  try {
    const { email, senha, acao } = req.body;

    if (acao === 'registro') {
      // Verificar se o email já existe
      const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
      db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
          console.error('Erro ao verificar o email:', err);
          res.status(500).json({ error: 'Erro ao processar a solicitação.' });
        } else {
          if (result.length > 0) {
            res.status(400).json('Email já cadastrado. Por favor, escolha outro.');
          } else {
            // Se o email não existe, criar um novo usuário
            const insertUserQuery = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
            db.query(insertUserQuery, [email, senha], (err) => {
              if (err) {
                console.error('Erro ao cadastrar usuário:', err);
                res.status(500).json({ error: 'Erro ao processar a solicitação.' });
              } else {
                res.status(201).json({ message: 'Usuário registrado com sucesso!' });
              }
            });
          }
        }
      });
    } else if (acao === 'logar') {
      // Verificar se o email e senha correspondem a um usuário
      const checkLoginQuery = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
      db.query(checkLoginQuery, [email, senha], (err, result) => {
        if (err) {
          console.error('Erro ao verificar o login:', err);
          res.status(500).json({ error: 'Erro ao processar a solicitação.' });
        } else {
          if (result.length > 0) {
            res.status(200).json({ message: 'Login bem-sucedido!' });
          } else {
            res.status(401).json({ error: 'Credenciais inválidas.' });
          }
        }
      });
    } else {
      res.status(400).json({ error: 'Ação inválida.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

app.listen(8081, ()=>{
    console.log("Listening...")
})