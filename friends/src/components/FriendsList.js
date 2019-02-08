import React from "react";
import { connect } from "react-redux";


import { getFriend, deleteFriend } from './../store/actions';


class FriendsList extends React.Component {
  constructor() {
    super();
  }

 
  componentDidMount() {
    this.props.getFriend();
    // call our action
  }

  render() {
    
    return (
      
        <div>

            <h1>CURRENT FRIENDS</h1>  
            <hr></hr> 
            <div>
                {this.props.friendos.map(item => {
                    return(
                      <div>
                        <h3>{item.name}</h3>
                        <h2>Age: {item.age}, E-Mail: {item.email}</h2>
                        <p>------------------------------</p>
                        <button onClick={e => {this.props.deleteFriend(item)}}>Delete Friend</button>

                        <hr></hr>
                        </div>
                    )
                })}
            </div>
                  
        </div>
             
    );
  };

};


const mapStateToProps = state => {
    return {
      
      friendos: state.friends
    };
  };


export default connect(
  mapStateToProps,
  { getFriend, deleteFriend }
)(FriendsList);
