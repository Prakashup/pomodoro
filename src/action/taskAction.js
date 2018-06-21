export const saveTask = (task) =>{
    const updateTask = { ...task, isPlaying: false };
    return {
        type:'ADD_TASK',
        payload: {
            task: updateTask
        }
    }
};

export const deleteTask = (task) =>{
    return {
        type:'DELETE_TASK',
        payload: {
            task
        }
    }
};

export const playTask = (task) => {
    return {
        type:'PLAY_TASK',
        payload: {
            task
        }
    }
};
