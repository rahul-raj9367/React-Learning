import React from 'react'


//props la jsobject varahum
export default function Props({name,age,course}) {
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.course}</h1> */}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{course}</h1>
    </div>
  )
}

