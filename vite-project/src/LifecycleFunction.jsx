import React from 'react'
import { useState } from 'react'
import LifecycleClass from './LifecycleClass'

const LifecycleFunction = () => {
    const [toggle,settoggle]=useState(false)
    const hide=(()=>{
        settoggle(!toggle)
    })
  return (
    <div>
        <button onClick={hide}>
            Hide Component
        </button>
        {toggle && <LifecycleClass/>}
    </div>
  )
}

export default LifecycleFunction