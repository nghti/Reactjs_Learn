import React from 'react'

export const ListTodo = (props) => {
  return (
    <div>
      <ul>
        {
          props.items.map((item, i) => 
            <li key={i}>{item} <button onClick={props.deClick}>X</button></li>
          )
        }
      </ul>
    </div>
  )
}
