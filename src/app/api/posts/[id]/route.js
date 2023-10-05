import con from "@/utils/db"



export const GET = async({ params })=>{
    const id = params.id

    try{
        const [post] = await con('myblog').where({
            id
        })
        const data = JSON.stringify(post)
        
        return new Response(data, { status: 200 })
    }catch(e){
        return new Response(e.message, { status: 500 })
    }
}