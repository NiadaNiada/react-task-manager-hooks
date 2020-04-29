import React, {
    createContext,
    useEffect,
    useState,
    useRef,
    useReducer,
    useCallback
} from "react";
import {useLocalStorage} from "../hooks/Store";
import {reducer} from "../reducers/Reducer";

export const TasksContext = createContext({});

const TasksContextProvider = props => {
    const [storedTasks, setStoredTasks] = useLocalStorage("tasks");
    const [height, setHeight] = useState(0);
    const [refHeight, setRefHeight] = useState();

    const editInputRef = useRef();

    const [state, dispatch] = useReducer(reducer, storedTasks);
    const {tasks, editItem} = state;

    useEffect(() => {
        if (refHeight && refHeight.current) {
            setHeight(refHeight.current.getHeight());
        }
    }, [refHeight, tasks]);

//Store tasks on reload
    window.addEventListener('beforeunload', function (e) {
        setStoredTasks(tasks);
        delete e['returnValue'];
    });
//or Store tasks at each editing
    // useEffect(() => {
    //     setStoredTasks(tasks);
    // }, [tasks, setStoredTasks]);

    const uniq = () => Date.now();

    const addTask = useCallback(
        title => {
            dispatch({type: "ADD_TASK", payload: {title: title, id: uniq()}});
        },
        [dispatch]
    );

    const deleteTask = id => {
        dispatch({type: "DELETE_TASK", payload: {id}});
    };

    const findItem = id => {
        dispatch({type: "FIND_TASK", payload: {id}});

        editInputRef.current.focus();
    };

    const editTask = (title, id) => {
        dispatch({type: "EDIT_TASK", payload: {title, id}});
    };

    const clearOrCancel = () => {
        if (editItem) {
            dispatch({type: "CANCEL_EDIT"});
        }
    };

    const setReference = ref => {
        setRefHeight(ref);
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                editTask,
                editItem,
                findItem,
                editInputRef,
                height,
                refHeight,
                setReference,
                clearOrCancel
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;
