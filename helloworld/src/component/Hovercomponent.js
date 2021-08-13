import React, { Component } from 'react'

 class Hovercomponent extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered X times</h2>
            </div>
        )
    }
}

export default Hovercomponent
