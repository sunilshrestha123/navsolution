import React from 'react';
import '../../assets/css/navbar.css';
const MenuItems = props => {
  return (
    <ul class='ul'>
      <li class='li'>
        <a class='a'>{props.menuName}</a>{' '}
      </li>
    </ul>
  );
};

export default MenuItems;
