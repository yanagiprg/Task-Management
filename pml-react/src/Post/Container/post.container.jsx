import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';

import PostList from '../Components/molecules/post-list.component';
import PostForm from '../Components/molecules/post-form.component';

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  };

  componentDidMount(){
    axios.get('http://localhost:3001/posts')
    .then((results) => {
      console.log(results);
      this.setState({posts: results.data})
    })
    .catch((data) => {
      console.log(data);
    })
  };

  createPost = title => {
    axios.post('http://localhost:3001/posts', {title: title})
    .then((response) => {
      const newData = update(this.state.posts, {$push:[response.data]});
      this.setState({posts: newData})
    })
    .catch((data) => {
      console.log(data)
    })
  };

  updatePost = (id, title) => {
    axios.patch(`http://localhost:3001/posts/${id}`, {title: title})
    .then((response) => {
      const postIndex = this.state.posts.findIndex(x => x.id === id);
      const posts = update(this.state.posts, {[postIndex]: {$set: response.data}});
      this.setState({posts: posts});
    });
  };

  render(){
    return (
      <div className='post-container'>
        <PostList postData={ this.state.posts } updatePost={this.updatePost} />
        <PostForm createPost={this.createPost}/>
      </div>
    )
  };
};

export default PostContainer;