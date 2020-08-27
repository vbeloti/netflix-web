import React, { useEffect, useState } from 'react';

import './styles.css';

const Nav: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    }

    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  return (
    <div className={`nav ${show ? 'nav__black' : ''}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix avatar"
      />
    </div>
  );
};

export default Nav;
