import React, { useState } from 'react';
import { connect } from 'react-redux';

function Todo(props) {
    const [value, setValue] = useState("");
    return (
        <div>
            <input value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <button
                onClick={() => {
                    props.addTask(value);
                    setValue("");
                }}
            >Submit</button>
            <ul>
                {props.tasksArr.map((taskObj) => {
                    let id = taskObj.id;
                    return (<li>
                        {taskObj.task}
                        <button
                            onClick={() => props.deleteTask(id)}
                        >Delete</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (value) => {
            return dispatch({ type: "insert_task", payload: value });
        },

        deleteTask: (id) => {
            return dispatch({ type: "delete_task", payload: id });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
