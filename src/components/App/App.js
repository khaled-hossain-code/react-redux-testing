import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentList from '../ComponentList/CommentList';
import CommentBox from '../ComponentBox/CommentBox';
import * as actions from '../../actions';

class App extends Component {
  toggleAuth = () => {
    this.props.changeAuth();
  }

  renderButton() {
    return(
      <button onClick={this.toggleAuth}>{ this.props.auth ? 'Sign Out' : 'Sign In' }</button>
    )
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }
  
  render() {
    return <>
    { this.renderHeader() }
    <Route path="/post" component={CommentBox} />
    <Route exact path="/" component={CommentList} />
  </>
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps, actions)(App);