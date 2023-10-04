import bcrypt from 'bcryptjs'

class Authentication{
    hash = (text)=>{
        const rounds = 12
        const salt = bcrypt.genSaltSync(rounds)
        const cypher = bcrypt.hashSync(text, salt)

        return cypher
    }

    compare = (text, hash)=>{
        return bcrypt.compareSync(text, hash)
    }
}


export default new Authentication()