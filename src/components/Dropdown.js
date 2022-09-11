import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../styles/dropdown.css'


export default function Dropdown(){
	const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


	return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown clicked" : "dropdown"}
      >
        {MenuItems.map((item, index) => {

          return (
            <li key={index} className="dropdown-list">
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}