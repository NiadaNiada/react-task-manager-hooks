import React, { useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const Header = () => {
    const { height } = useContext(TasksContext);

    return (
        <div className="header">
            <h1>Task Manager</h1>
            <span>Container Height: {height} px</span>
        </div>
    );
};

export default Header;