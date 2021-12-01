import React, { useEffect, useState } from 'react'

function HookEffect1() {
const [count,setCount] = useState(0)
const [name,setName] = useState('')


useEffect(()=>{
    console.log("useEffect - shoud be updated")
    document.title = `you clicked the ${count} times `
},[count])

    return (
        <div>
            <input type= 'text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)} >Click{count}</button>
        </div>
    )
}

export default HookEffect1