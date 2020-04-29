export const reducer = (state, action) => {
    const { type = "", payload } = action;

    const handlers = {
        ADD_TASK: (state, payload) => ({
            ...state,
            tasks: [...state.tasks, { title: payload.title, id: payload.id }]
        }),
        DELETE_TASK: (state, payload) => ({
            ...state,
            tasks: state.tasks.filter(task => task.id !== payload.id)
        }),
        EDIT_TASK: (state, payload) => ({
            ...state,
            tasks: state.tasks.map(task =>
                task.id === payload.id ? { title: payload.title, id: payload.id } : task
            ),
            editItem: null
        }),

        FIND_TASK: (state, payload) => ({
            ...state,
            editItem: state.tasks.find(task => task.id === payload.id)
        }),
        CANCEL_EDIT: (state, payload) => ({
            ...state,
            editItem: null
        })
    };

    return handlers[type](state, payload) || state;
};