import React, { Component } from 'react'

 class ErrorBoundary extends Component {
     static getDerivedStateFromError(error) {
         return {
             hasError:true
         }
     }
    render() {
        // display error and fallback UI
        return (
           if(this.state.hasError) {
               return(<h1>Somthing is  wrong</h1>)
           }
           return (<h1>Correct</h1>)
        )
    }
}

export default ErrorBoundary
