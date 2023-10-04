import Authentication from "@/services/Authentication"
import con from "@/utils/db"

export const POST = async(request, response)=>{
    let statusCode = 400
    try{
        const timestamp = Date.now()
        const hexaString = Math.random().toString(16)
        const id = `${timestamp}-${hexaString}`
        const { name, email, password } = await request.json()
        const hash = Authentication.hash(password)        
        
       
        const checkUser = await con.promise().query(`
            SELECT * FROM labeninja_users WHERE email = '${email}'
        `)

        const sql = `
            INSERT INTO labeninja_users(id, name, email, password)
            VALUES(?,?,?,?)
        `
        await con.promise().query(sql, [id, name, email, hash])

        return new Response('Usuário cadastrado', { status: 201 })
    }catch(e){
        //return new Response(e.message || e.sqlMessage, { status: statusCode })
        response.status(statusCode).send(e.message || e.sqlMessage)
    }
}