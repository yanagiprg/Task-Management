import React from 'react';

import ViewPost from './post-update.component';

class PostList extends React.Component {
  render(){
    return(
      <div className='postlist'>
        {this.props.postData.map((data) => {
          return(
            <ViewPost 
              data={ data } 
              key={data.id} 
              onUpdate={this.props.updatePost}
              onDelete={this.props.deletePost} 
            />
          )
        })}
      </div>
    )
  }
};

export default PostList;