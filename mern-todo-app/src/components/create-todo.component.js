import React, {Component} from 'react'

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state= {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>Wecome to Create Todo</p>
            </div>
        )
    }
}