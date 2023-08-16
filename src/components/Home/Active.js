import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Active() {
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
    return (
        <div>
         <Link
      href="#"
      className={`link ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      Link
    </Link>
         <Link
      href="#"
      className={`link ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      Link
    </Link>
        </div>
      );
    }
  

export default Active