import Authentication from "@/services/Authentication"
import con from "@/utils/db"

export const POST = async(request)=>{
    try{
        const timestamp = Date.now()
        const hexaString = Math.random().toString(16)
        const id = `${timestamp}-${hexaString}`
        const { name, email, password } = await request.json()
        const hash = Authentication.hash(password)

        const [user] = await con('labeninja_users').where({
            email
        })

        if(user){
            return new Response('Usuário já cadastrado', { status: 403 })
        }
        
        await con('labeninja_users').insert({
            id,
            name,
            email,
            password: hash
        })

        return new Response('Usuário cadastrado', { status: 201 })
    }catch(e){
        return new Response(e.message || e.sqlMessage, { status: 500 })
    }
}