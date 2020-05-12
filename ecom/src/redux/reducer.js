const initialState = {
    visibility: 'ALL',
    todos:[]
}

const reducer = (state= initialState, action) => {
    console.log('Esta es la action', action);
    
    switch (action.type) {
        case 'ADD_TODO':

        return {
            ...state,
            todos: [
                ...state.todos, 
                {
                    text: action.payload, 
                    completed: false,
                }
            ]
        };

    default: 
        return state;
    }
}

export default reducer;
