import React from 'react';

import {Button} from 'react-bootstrap';

class ViewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateTitle: '',
    }
  }


  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateTitle)
  }

  handleInput = (e) => {
    this.setState({updateTitle: e.target.value})
  }


  render() {
    return(
      <div>
        <span>{this.props.data.title}</span>
        <span>
          <input 
            type="text" 
            value={this.state.updateTitle} 
            onChange={e => this.handleInput(e)} 
          />
        </span>
        <span>
          <Button type="submit" onClick={this.handleUpdate}>更新！</Button>
        </span>
        {/* <p>{this.props.data.content}</p> */}
      </div>
    )
  }
}

export default ViewPost;