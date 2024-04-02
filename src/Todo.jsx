import React from 'react'
import { ACTION } from './App'

export default function Todo({todo,dispatch}) {
  return (
    <div>
        <span style={{color: todo.completed?'green':'red'}}>{todo.name}</span>
        <button type='button' onClick={()=> 
        dispatch({
            type:ACTION.TOOGLE_TODO,
            payload:{
                id: todo.id
            }
        })
        }>toogle</button>
        <button type='button' 
         onClick={()=> 
            dispatch({
                type:ACTION.DELETE_TODO,
                payload:{
                    id: todo.id
                }
            })
            }>delete</button>
    </div>
  )
}
