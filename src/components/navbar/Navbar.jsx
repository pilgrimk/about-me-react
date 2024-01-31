import React, { useState } from 'react'
import { Link } from 'react-scroll'
import * as Scroll from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import shortid from 'shortid'
import data from '../../constants/data'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const scrollToAnchor = (anchor) => {
    scroller.scrollTo(anchor, {
      duration: 500,
      smooth: true,
      exact: true
    });
  };

  const goToHomeAndScrollToAnchor = async (anchor) => {
    //scroll to anchor is not working !!
    navigate('/home');
    //scrollToAnchor(anchor);
  };

  const handleScroll = (anchor) => {
    setClick(false);
    if (location === 'home') {
      scrollToAnchor(anchor);
    }
    else {
      goToHomeAndScrollToAnchor(anchor);
    }
  }

  const content =
    <>
      <div className='lg:hidden block absolute top-16 w-full
      z-50 left-0 right-0 bg-slate-300 transition'>
        <ul className='text-center text-xl p-20'>
          {data.navlinks.map((navlink) => (
            <Link
              spy={true}
              smooth={true}
              to={navlink.link_to}
              // offset={-64}
              key={shortid.generate()}>
              <li className='my-4 py-4 border-b border-teal-800 
            hover:bg-teal-500 hover:text-white hover:rounded cursor-pointer'
                onClick={() => handleScroll(`${navlink.link_to}`)}>
                {navlink.link_title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r
     from-slate-300 to-slate-100'>
      <div className='h-10vh flex justify-between 
      text-black lg:py-5 px-20 py-4 border-slate-800'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold italic ml-8 text-black'>
            {data.contact_info.full_name}
          </span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center 
        justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              {data.navlinks.map((navlink) => (
                <Link
                  spy={true}
                  smooth={true}
                  to={navlink.link_to}
                  key={shortid.generate()}
                  // offset={-64}
                  onClick={() => handleScroll(`${navlink.link_to}`)}>
                  <li className='hover:text-black transition hover:border-b-2 
                border-teal-900 hover:border-teal-600 cursor-pointer'>
                    {navlink.link_title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar