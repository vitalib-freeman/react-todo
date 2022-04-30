import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {
    const items = ['Learn React', 'Build Awesome App'];

    return (
        <ul>
            <li>
                <TodoListItem
                    label={todos[0].label}
                    important={todos[0].important}/>
            </li>
            <li>
                <TodoListItem
                    label={todos[1].label}
                    important={todos[1].important}/>
            </li>
        </ul>
    );
};

export default TodoList;