
// ensureAuthenticated.ts :
// TRATAR ERRO NO request.user_id = sub
// tsconfig.ts add :
//  "typeRoots": ["./src/@types", "node_modules/@types"]

// try {
//     const { sub } = verify(token, process.env.JWT_SECRET) 

//     request.user_id = sub
    
// } catch (error) {
//     return response.status(401).json({
//         errorCode: 'token.expired'
//     })
// }

declare namespace Express{
    export interface Request{
        user_id:string
    }
}