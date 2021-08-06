import React from 'react'

const Hello = () => {
//     return (
//         <div>
//         <h1>Hello Vanabhojana</h1> // jsx version
//         </div>
//     )
return React.createElement('div',{id:'hello',className :'dummyClass'},React.createElement('h1',null,'Hello Vanabhojana'))
 }

export default Hello