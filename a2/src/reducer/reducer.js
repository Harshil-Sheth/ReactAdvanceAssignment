export const initialState = {
  id: 200,
  loading: true,
  todos: [],
  error:''
};


const reducer = (state, action) =>{
    // console.log(state)
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          ...state,
          todos: action.payload,
          loading: false,
          error: ''
        };
        case 'ADD_TODO':
          const newId = state.id + 1;
      const newTodo = {
        id: newId,
        title: action.text
      };
      return {
        id: newId,
        todos: [newTodo,...state.todos]
      };
    
        case "DELETE_TODO":
          const idx = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(idx, 1);
          return {
            id: state.id,
            todos: todos
          };
        case "UPDATE_TODO":
          console.log(action)
          return {
            ...state,
            data: {
              ...state.todos,
              [action.id]: {
                ...state.todos[action.id],
                title: action.text
              }
            }
          };
        default:
          return state;
      }
}



  
export default reducer;