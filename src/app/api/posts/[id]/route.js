import con from "@/utils/db"



export const GET = async({ params })=>{
    const { id } = params

    try{
        const post = await con.promise().query(
            'SELECT * FROM myblog WHERE id = ?'
        , [id])
        let data = JSON.stringify(post[0])
        
        return new Response(data, { status: 200 })
    }catch(e){
        return new Response(e.message, { status: 500 })
    }
}