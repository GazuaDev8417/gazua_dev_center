import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import con from "@/utils/db"
import Authentication from "@/services/Authentication"


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:'credentials',
      name:'Credentials',
      async authorize(credentials){
        try{
            const [user] = await con.promise().query(
              'SELECT * FROM gazuadev WHERE email = ?', [credentials.email]
            )

            if(user){
              const isPasswordCorrect = Authentication.compare(credentials.password, user[0].password)

              if(isPasswordCorrect){
                return user
              }else{
                throw new Error('Credenciais inválidas!')
              }
            }else{
              throw new Error('Usuário não encontrado!')
            }
        }catch(error){
          throw new Error(error)
        }
      }
    })
  ],
  pages: {
    error: '/dashboard/login'
  }
})

export { handler as GET, handler as POST}