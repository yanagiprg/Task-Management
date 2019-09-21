import React from 'react';

import {Button, FormGroup, FormControl} from 'react-bootstrap';

class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
    }
  };

  onChangeText(e) {
    this.setState({title: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createPost(this.state.title)
    this.setState({title:''})
  }
  
  render(){
    return(
      <div>
        <form>
          <FormGroup controlId='formBasicText'>
            <FormControl
              type='text' 
              value={this.state.title}
              placeholder='Enter Title' 
              onChange={ e => this.onChangeText(e) }
            />
          </FormGroup>
        </form>
        <Button type='submit' onClick={this.hundleSubmit}>Submit</Button>
      </div>
    )
  }
};

export default PostForm;