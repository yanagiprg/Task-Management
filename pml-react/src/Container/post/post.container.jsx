import React from 'react';
import axios from 'axios';

import PostsContainer from '../../Presentational/molecules/posts-container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: [],
      content: [],
    }
  };

  componentDidMount(){
    axios.get('http://localhost:3001/posts')
    .then((results) => {
      console.log(results);
      this.setState({title: results.data, content: results.data})
    })
    .catch((data) => {
      console.log(data);
    })
  };
  

  render(){
    return (
      <div className='post-index'>
        <PostsContainer postData={ this.state.title } />
      </div>
    )
  };
};

export default PostIndex;