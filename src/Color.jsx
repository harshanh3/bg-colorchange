import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Color = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="container d-flex justify-content-center  align-items-center" style={{ backgroundColor: backgroundColor, height: '100vh', width: '100vw' }}>
      <div>
        <Button className="btn btn-success" onClick={() => handleColorChange('green')}>Green</Button>
        <Button className="btn btn-danger" onClick={() => handleColorChange('red')}>Red</Button>
        <Button className="btn btn-primary" onClick={() => handleColorChange('blue')}>Blue</Button>
        <Button className="btn btn-warning" onClick={() => handleColorChange('yellow')}>Yellow</Button>
      </div>
    </div>
  );
};

export default Color;