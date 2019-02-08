import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../store/actions';


class CreateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriendo: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      newFriendo: {
        ...this.state.newFriendo,
        [e.target.name]: e.target.value
      }
    });
  };

  postFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriendo);
  };

  render() {
    return (
      <div>
        <h2>ADD NEW FRIEND</h2>
        <form onSubmit={this.postFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.newFriendo.name}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.newFriendo.age}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.newFriendo.email}
          />
          
          <button type="submit">
            ADD FRIEND
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendos: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(CreateFriend);