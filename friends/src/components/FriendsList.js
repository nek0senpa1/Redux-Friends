import React from "react";
import { connect } from "react-redux";


import { addFriend } from './../store/actions';


class FriendsList extends React.Component {
  constructor() {
    super();
  }

 
  componentDidMount() {
    this.props.addFriend();
    // call our action
  }

  render() {
    
    return (
      
        <div>

            <h1>Current Friends</h1>   

                  
        </div>
             
    );
  };

}


const mapStateToProps = state => ({
   
    friendos: state.friends,
  
  });


export default connect(
  mapStateToProps,
  { addFriend }
)(FriendsList);
