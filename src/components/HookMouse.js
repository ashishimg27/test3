import React, { useEffect, useState } from 'react'

function HookMouse() {
    const[X,setX] = useState(0)
    const[Y,setY] = useState(0)

   const  logMousePosition =e=>{
        console.log("Mouse event called")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect update")
        window.addEventListener('mousemove',logMousePosition)

            return()=>{
                console.log("compo unmount code")
                window.removeEventListener('mousemove',logMousePosition)
            }

    },[])
    return (
        <div>
            X - {X}   Y - {Y}
        </div>
    )
}

export default HookMouse
