import Authentication from "@/services/Authentication"
import con from "@/utils/db"


export const POST = async(request)=>{
    try{
        const { email, password } = await request.json()

        const [user] = await con('labeninja_users').where({
            email
        })

        if(!user){
            return new Response('Usuário não encontrado', { status: 404 })
        }

        if(!Authentication.compare(password, user.password)){
            return new Response('Usuário não encontrado', { status: 401 })
        }
        
        return new Response('', { status: 200 })
    }catch(e){
        return new Response(e.message || e.sqlMessage, { status: 500 })
    }
}