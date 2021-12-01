import React, { useState } from 'react'

function Hook1() {
const [count,setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)} >Click{count}</button>
        </div>
    )
}

export default Hook1
