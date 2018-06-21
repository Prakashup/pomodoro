const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const { task } = action.payload;

            return { ...state,
                tasks: [...state.tasks, task]
            };

        case 'DELETE_TASK':

            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.task.id)
            };

        case 'PLAY_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                        {
                            if(task.id !== action.payload.task.id && task.isPlaying )
                            {
                                task.isPlaying = false
                            } else if(task.id === action.payload.task.id) {
                                task.isPlaying = true
                            }
                            return task;
                        } )

            };

        default:
            return state
    }
};

export default taskReducer;