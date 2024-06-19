const initState= {
    user:{
        uid:'test@gmail.com',
        nickname:'레벨업라이프',
        level:1,
        hero:1,
    }

}

export const userAction= (user)=> { return {type:'setUser', user:{...user}}}

export default function setUser(state= initState, action){
    switch(action.type){
        case 'setUser' :
            return { ...state, user: { ...action.user }}

        default:
            return state
    }
}