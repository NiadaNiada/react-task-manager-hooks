import { useState } from "react";

const initialValue = {tasks:[
    { id: '0', title: 'Read a book' },
    { id: '1', title: 'Jog in a playground' },
    { id: '2', title: 'Write articles' }
]};

export const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // tasks: Array.isArray(storedTasks) ? storedTasks : []
            return Array.isArray(JSON.parse(item)) ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};