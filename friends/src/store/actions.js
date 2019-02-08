import axios from 'axios';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const GET_FRIEND_START = 'GET_FRIEND_START';
export const GET_FRIEND_SUCCESS = 'GET_FRIEND_SUCCESS';
export const GET_FRIEND_FAILURE = 'GET_FRIEND_FAILURE';

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';



export const getFriend = () => dispatch => {
    dispatch({ type: GET_FRIEND_START });
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => 
        dispatch({ type: GET_FRIEND_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: GET_FRIEND_FAILURE, payload: err.data })
      );
  };


export const addFriend = friend => dispatch => {
    dispatch ({ type: ADD_FRIEND_START });
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then (res => dispatch ({
            type: ADD_FRIEND_SUCCESS, payload: res.data
        }))
        .catch(err => dispatch({
            type: ADD_FRIEND_FAILURE, payload: err.data
        }))
    
}


  export const deleteFriend = friend => dispatch => {
    dispatch({ type: DELETE_FRIEND_START });
    
    axios
      .delete(`http://localhost:5000/api/friends/${friend.id}`)
      .then(response => {
        dispatch({
          type: DELETE_FRIEND_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: DELETE_FRIEND_FAILURE,
          payload: err.data
        });
      });
  };
  

  export const updateFriend = friendID => dispatch => {
    dispatch({ type: UPDATE_FRIEND_START });
    axios
      .put(`http://localhost:5000/api/friends/${friendID}`)
      .then(response => {
        dispatch({
          type: UPDATE_FRIEND_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: UPDATE_FRIEND_FAILURE,
          payload: err.data
        });
      });
  };
  