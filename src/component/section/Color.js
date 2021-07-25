import React, { Component } from 'react'

class Color extends Component {


    render() {

        const { colors } = this.props

        return (
            <div className="colors">
                {colors.map((color, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: color }}>0</button>
                    )
                })}
            </div>
        )
    }
}

export default Color