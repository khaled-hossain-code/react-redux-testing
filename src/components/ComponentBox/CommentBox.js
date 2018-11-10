import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = {
    comment: ''
  }

  onComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      comment: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.onComment} name="comment" id="commentBox" cols="30" rows="10"></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}