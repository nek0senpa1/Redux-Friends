import React from "react";
import { connect } from "react-redux";


import { getFriend, deleteFriend, updateFriend } from './../store/actions';


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upFriendo: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      upFriendo: {
        ...this.state.upFriendo,
        [e.target.name]: e.target.value
      }
    });
  };

  updFriend = (e, idey) => {
    e.preventDefault();
    this.props.updateFriend(idey, this.state.upFriendo);
  };

 
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
                        <h4>Age: {item.age}, E-Mail: {item.email}</h4>
                        <p>------------------------------</p>
                        <button onClick={e => {this.props.deleteFriend(item)}}>Delete Friend</button>
                        <p>------------------------------</p>
                        <h4>Update Friend</h4>
                        <div>
                          <p>New Info Goes Here</p>
                          <form onSubmit={e => {this.updFriend(e, item.id)}}>
                            <input
                              type="text"
                              name="name"
                              placeholder={item.name}
                              onChange={this.handleChange}
                              value={this.state.upFriendo.name}
                            />
                            <input
                              type="text"
                              name="age"
                              placeholder={item.age}
                              onChange={this.handleChange}
                              value={this.state.upFriendo.age}
                            />
                            <input
                              type="text"
                              name="email"
                              placeholder={item.email}
                              onChange={this.handleChange}
                              value={this.state.upFriendo.email}
                            />
                            
                            <button type="submit">
                              UPDATE FRIEND
                            </button>
                          </form>
                        </div>
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
  { getFriend, deleteFriend, updateFriend }
)(FriendsList);
