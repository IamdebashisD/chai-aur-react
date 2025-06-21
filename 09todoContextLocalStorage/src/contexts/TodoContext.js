import { createContext, useContext } from "react";

export const TodoContext = createContext({
    totos: [
        {
            id: Date.now(),
            todo: 'text',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider