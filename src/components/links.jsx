import React from 'react';
import { Link } from 'react-scroll';

const Links = ({ orientation }) => {
    const isVertical = orientation === 'vertical';
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: isVertical ? 'column' : 'row', 
                alignItems: isVertical ? 'flex-end' : 'center',
                padding: isVertical ? '24px 24px 24px 64px' : '0',  // Add padding when vertical
            }}>
                <Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    style={{ color: '#808080', paddingBottom: '5px', marginBottom: isVertical ? '10px' : '0' , padding: isVertical ? '0' : '0px 24px 5px 24px'}}
                    activeStyle={{ borderBottom: '2px solid #000000', color: '#000000' }}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="aboutus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    style={{ color: '#808080', paddingBottom: '5px', marginBottom: isVertical ? '10px' : '0' , padding: isVertical ? '0' : '0px 24px 5px 24px'}}
                    activeStyle={{ borderBottom: '2px solid #000000', color: '#000000' }}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="offerings"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    style={{ color: '#808080', paddingBottom: '5px', marginBottom: isVertical ? '10px' : '0' , padding: isVertical ? '0' : '0px 24px 5px 24px'}}
                    activeStyle={{ borderBottom: '2px solid #000000', color: '#000000' }}
                >
                    Products
                </Link>
                <Link
                    activeClass="active"
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    style={{ color: '#808080', paddingBottom: '5px', marginBottom: isVertical ? '10px' : '0' , padding: isVertical ? '0' : '0px 24px 5px 24px'}}
                    activeStyle={{ borderBottom: '2px solid #000000', color: '#000000' }}
                >
                    Contact
                </Link>
            </div>
        );
}

export default Links;