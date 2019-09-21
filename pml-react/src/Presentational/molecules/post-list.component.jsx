import React from 'react';
import ViewPost from '../atom/post-data.component';

class PostList extends React.Component {
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

export default PostList;