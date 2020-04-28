import React, { useContext, useMemo } from "react";
import { TasksContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
    const { tasks } = useContext(TasksContext);

    const mappedTasks = useMemo(
        () =>
            tasks.map(task => {
                return <Task task={task} key={task.id} />;
            }),
        [tasks]
    );

    return (
        <div>
            {tasks.length ? (
                <ol className="list">
                    {mappedTasks}
                </ol>
            ) : (
                <div className="no-tasks">No Tasks</div>
            )}
        </div>
    );
};

export default TaskList;