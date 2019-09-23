import React from 'react';
import {Button} from 'react-bootstrap';

class ViewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateTitle: '',
    }
  }

  handleInput = (e) => {
    this.setState({updateTitle: e.target.value})
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateTitle)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.data.id)
  }

  render() {
    return(
      <div>
        <h4>{this.props.data.content}  </h4>
        <span>:{this.props.data.title}</span>
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
        <span>
          <Button onClick={this.handleDelete}>削除ッッ！</Button>
        </span>
      </div>
    )
  }
}

export default ViewPost;