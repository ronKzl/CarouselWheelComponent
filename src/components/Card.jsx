import React, { useState, useEffect } from 'react'



const Card = (props) => {

    const get_card_coords = (theta, radius) => {
        return {
            x: Math.cos(theta) * radius,
            y: Math.sin(theta) * radius

        }
    }
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
        setCoords(get_card_coords(props.theta, props.radius))

    }, [props.theta, props.radius]); //[wheelRef.current]



    return (
        <div style={{ ...styles.card, left: `${props.center.x + coords.x}px`, top: `${props.center.y - coords.y}px`, transform: `translate(-50%, -50%) rotate(${-props.rotateBy}deg)` }}>
            <img src={props.image} alt='bus' style={styles.image}></img>

        </div>
    )
}

const styles = {
    card: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '8vh',
        width: '8vh',
        backgroundColor: 'yellow',
        borderRadius: '100px',
        transition: 'transform 0.5s ease-in-out',
        zIndex: 1
    },
    image: {
        borderRadius: '100px',
        height: '100%',
        width: '100%',
    }
}

export default Card