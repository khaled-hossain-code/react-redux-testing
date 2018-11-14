import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CommentBox extends Component {
  state = {
    comment: ''
  }

  shouldNavigateAWay(){
    if(!this.props.auth){
      this.props.history.push('/');
    }
  }

  componentDidMount(){
    this.shouldNavigateAWay();
  }

  componentDidUpdate(){
    this.shouldNavigateAWay();
  }

  onComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    
    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <>
      <form onSubmit={this.onSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.onComment} name="comment" id="commentBox" cols="30" rows="10"></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </>
    )
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default connect(mapStateToProps, actions)(CommentBox);