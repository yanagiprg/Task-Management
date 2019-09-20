import React from 'react';

class ViewPost extends React.Component {
  render() {
    return(
      <div>
        <h4>{ this.props.data.title }</h4>
        <p>{ this.props.data.content }</p>
      </div>
    )
  }
};

export default ViewPost;