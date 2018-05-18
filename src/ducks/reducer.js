let initialState = {
    id: '',
    username: '',
    profile_picture: ''
}

const GET_USER = 'GET_USER'

export function getUser(id, username, profile_picture){
    return {
        type: GET_USER,
        payload: {id: id, username: username, profile_picture: profile_picture}
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type){
        case GET_USER:
            return Object.assign({}, state, 
                {
                    id: action.payload.id,
                    username: action.payload.username,
                    profile_picture: action.payload.profile_picture
                })
        default:
            return state
    }
}