import React, {useState} from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import menuButton from "../assets/icons/icon-menu.svg";
import CartIcon from '../assets/icons/CartIcon';
import Menu from './Menu';

export default function Header(props) {
  const [isMenuOpened, setMenuState] = useState(false);

  return (
    <header>
      <div>
        <img 
          src={menuButton} 
          alt="Menu button" 
          id="menu-button" 
          onClick={() => setMenuState(isMenuOpened => !isMenuOpened)}
          />
        <img src={logo} alt="Sketchers-logo" />
        <Menu state={isMenuOpened ? 'main-menu opened' : 'main-menu'} setMenuState={setMenuState}/>
      </div>
      <div>
          <CartIcon 
            color='#69707D'
            onClick={props.setCartState}
          />
          {props.totalCarItems() > 0 ? <span id='amount-displayer'>{props.totalCarItems()}</span> : ''}
        <img src={avatar} alt="User profile" className="profile-picture" />
      </div>
    </header>
  );
}
