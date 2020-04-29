import React from "react";
import TasksContextProvider from "../context/TaskContext";
import "./App.css";
import Container from "./Container";

const App = () => {
    return (
        <TasksContextProvider>
            <Container />
        </TasksContextProvider>
    );
};
export default App;