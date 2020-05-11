import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    }

    this.todoRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onAdd(this.state.todo);

    this.setState({ todo: '' });
    this.todoRef.current.focus();
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }


  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input ref={this.todoRef} placeholder="Add todo" value={this.state.todo} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit" value="+"></input>
      </form>
    )
  }
}