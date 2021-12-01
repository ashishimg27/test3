import React, { useState } from 'react'

function Hook3() {

    const [name,setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input type = 'text' value = {name.firstName} onChange = {e=> setName({...name, firstName: e.target.value})}/>
                <input type = 'text' value = {name.lastName} onChange = {e=> setName({...name, lastName: e.target.value})}/>
                <h1>the firstname is - {name.firstName}</h1>
                <h1>the lastname is - {name.lastName}</h1>
            </form>
        </div>
    )
}

export default Hook3
