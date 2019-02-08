
import { 
    ADD_FRIEND_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    GET_FRIEND_FAILURE,
    GET_FRIEND_START,
    GET_FRIEND_SUCCESS
} from './actions';


const initialStuff = {
    addingFriend: false,
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    addFriendSuccess: 'Friend Added!',
    addFriendFail: 'Friend Add Failed...',
    friends: [],
    error: null
      
};

const reducer = (state = initialStuff, action) => {
    switch(action.type){
        case GET_FRIEND_START: 
        return{
            ...state,
            fetchingFriends: true
        }
        case GET_FRIEND_SUCCESS: 
        return {
            ...state,
            friendsFetched: true,
            fetchingFriends: false,
            friends: action.payload
        }
        case GET_FRIEND_FAILURE:
        return {
            ...state,
            friendsFetched: false,
            fetchingFriends: false,
            error: action.payload
        }
        case ADD_FRIEND_START:
        return {
            ...state,
            addingFriend: true 
        }
        case ADD_FRIEND_SUCCESS:
        return {
            ...state,
            addingFriend: false
        }
        default:
        return state;
    }
}

export default reducer;