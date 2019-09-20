import React from 'react';
import ViewPost from '../atom/post-view';

class PostsContainer extends React.Component {
  render(){
    return(
      <div className='postlist'>
        {this.props.postData.map((data) => {
          return(
            <ViewPost data={ data } key={data.id} />
          )
        })}
      </div>
    )
  }
};

export default PostsContainer;