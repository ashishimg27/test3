import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseCont() {
    const [display,setDisply] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisply(!display)}>Toggle display</button>
            {display&&<HookMouse/>}
        </div>
    )
}

export default MouseCont
