import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentList extends Component {
  
  renderComments(){
    return this.props.comments.map( comment => {
      return (
        <li>{comment}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({comments}){
  return {
    comments
  }
};

export default connect(mapStateToProps)(CommentList);