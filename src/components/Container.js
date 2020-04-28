import React, { useRef, useContext } from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import Height from "./Height";
import { TasksContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";


const Container = () => {

    const { setReference } = useContext(TasksContext);
    const ref = useRef();

    setReference(ref);
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header />
                <Height className="main" ref={ref}>
                    <TaskForm />
                    <TaskList />
                </Height>
            </div>
        </div>
    );
};
export default Container;