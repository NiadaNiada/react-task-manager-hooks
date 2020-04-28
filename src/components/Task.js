import React, { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const Task = ({ task }) => {
    const { deleteTask, findItem, editItem } = useContext(TasksContext);
    return (
        <div className="items">
            <li className="list-item">
                {task.title}
            </li>
            <div>
                <button
                    disabled={editItem}
                    className="btn-delete task-btn"
                    onClick={() => deleteTask(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>{' '}
                <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>

        </div>
    );
};

export default Task;