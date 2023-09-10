import React, { useState } from 'react';
import Links from './links';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from 'react-responsive';
import Menu from './menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 720px)'
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 720px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 right-0 w-full bg-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <Link
                activeClass="active"
                to="landing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
            >
            <img src={logo} alt="Bihariji Steel Logo" className="w-24" />
            </Link>
          </div>
          {isDesktopOrLaptop && !isTabletOrMobile && (
            <div className="space-x-7">
              <Links orientation="horizontal" />
            </div>
          )}
          {isTabletOrMobile && (
            <div>
              <button onClick={toggleMenu}>
                <MenuIcon />
              </button>
              <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;