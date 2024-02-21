import React, { useState, useRef, useEffect } from 'react'
import Card from '../components/Card';
import busImg from '../bus.png'
import carImg from '../car.png'

const Wheel = (props) => {

  const wheelRef = useRef(null);
  const [circle, setCircle] = useState({
    radius: 150,
    cards: [],
    prevThetaPos: 0.0,
  })
  const [center, setCenter] = useState({ x: 0, y: 0, })


  useEffect(() => {
    const divElement = wheelRef.current;
    if (divElement) {
      const width = divElement.clientWidth;
      const height = divElement.clientHeight;
      //depending on device size set raidus appropriately 
      let center_point = { x: parseFloat(width) / 2, y: parseFloat(height) / 2 }
      setCenter(center_point)
    }

    const generateCardData = () => {
      const newCards = [];
      for (let i = 0; i < 8; i++) {
        newCards.push({ key: i, theta: i * (Math.PI / 4.0), image: (Math.random() > 0.6 ? carImg : busImg) });
      }
      return newCards;
    };

    // Update cards array
    setCircle((prevCircle) => ({
      ...prevCircle,
      cards: generateCardData(),
    }));

  }, []); //[wheelRef.current]




  return (
    <div style={{ ...styles.circle, transform: `translate(-50%, -50%) rotate(${props.rotationAngle}deg)` }} ref={wheelRef} className='w-32 h-32 absolute top-1/2 left-1/2 rounded-full z-10' >
      {/* {circle.cards.map((card) => (
        <Card
          key={card.key}
          theta={card.theta}
          radius={circle.radius}
          center={center}
          image={card.image}
          rotateBy={circle.rotationAngle}
        />
      ))} */}
      <Card
        key={0}
        theta={0.0}
        radius={circle.radius}
        center={center}
        image={(busImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={1}
        theta={(Math.PI / 4.0) * 1}
        radius={circle.radius}
        center={center}
        image={(busImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={2}
        theta={(Math.PI / 4.0) * 2}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={3}
        theta={(Math.PI / 4.0) * 3}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={4}
        theta={(Math.PI / 4.0) * 4}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={5}
        theta={(Math.PI / 4.0) * 5}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={6}
        theta={(Math.PI / 4.0) * 6}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
      <Card
        key={7}
        theta={(Math.PI / 4.0) * 7}
        radius={circle.radius}
        center={center}
        image={(carImg)}
        rotateBy={props.rotationAngle}
      />
    </div >
  )


}

const styles = {
  circle: {
    transition: 'transform 0.5s ease-in-out'
  },
}

export default Wheel