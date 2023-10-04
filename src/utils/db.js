const mysql = require('mysql2')


const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
})

con.connect(err=>{
    if(err){
        console.log(`Erro ao buscar dados: ${err}`)
        return
    }

    console.log('Conectado ao banco')
})


module.exports = con
