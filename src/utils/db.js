/* const mysql = require('mysql2')
const { config } = require('dotenv')

config()

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


module.exports = con */

import knex from 'knex'
import { config } from 'dotenv'

config()


const con = knex({
    client: 'mysql2',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
})

con.raw('SELECT 1+1 AS result').then(()=>{
    console.log('Conectado ao banco de dados')
}).catch(e=>{
    console.log(`Falhao ao conectar ao banco: ${e}`)
})


export default con