import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import con from "@/utils/db"
import bcrypt from 'bcryptjs'


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
            const [user] = await con('labeninja_users').where({
              email: credentials.email
            })

            if(user){
              const isPasswordCorrect = await bcrypt.compare(user.password, credentials.password)

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