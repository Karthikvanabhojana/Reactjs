import React from 'react'
import ReactDOM from 'react-dom'
function Portaldemo() {
    return ReactDOM.createPortal (<h1> Portal demo</h1>,document.getElementById('root')
    )
}

export default Portaldemo
