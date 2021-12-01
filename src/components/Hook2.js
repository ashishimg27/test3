import React, { useState } from 'react'

function Hook2() {
const intialValue = 0
const [count,setCount] = useState(0)

 const incrementFive=()=>{
for(let i=0; i<5; i++){
    setCount(prevState=>prevState+1)
}
}
    return (
        <div>
            count: {count}
            <button  onClick={()=>setCount( intialValue)}>reset</button>
            <button onClick={()=>setCount(prevState=>prevState+1)}>increment</button>
            <button  onClick={()=>setCount(prevState=>prevState-1)}>decrement</button>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    )
}

export default Hook2
