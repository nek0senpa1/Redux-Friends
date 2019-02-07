import axios from 'axios';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const addFriend = item => dispatch => {
    dispatch({ type: ADD_FRIEND_START });
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => 
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: ADD_FRIEND_FAILURE, payload: "the nasa api broke" })
      );
  };
  