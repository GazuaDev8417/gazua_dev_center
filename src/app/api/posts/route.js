import con from "@/utils/db"



export const GET = async()=>{
    try{
        const posts = await con.promise().query(`
            SELECT * FROM myblog
        `)
        const data = JSON.stringify(posts)
        
        return new Response(data, { status: 200 })
    }catch(e){
        return new Response(e.message || e.sqlMessage, { status: 500 })
    }
}