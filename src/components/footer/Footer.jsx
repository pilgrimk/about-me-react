import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin
} from 'react-icons/bs'
import { data } from '../../constants'
import shortid from 'shortid'

const Footer = () => {
  const navigate = useNavigate();
  const getLinkedIcon = (title) => {
    switch (title) {
      case 'Instagram':
        return <BsInstagram />;
      case 'Twitter':
        return <BsTwitter />;
      case 'LinkedIn':
        return <BsLinkedin />;
      default:
        return <BsFacebook />;
    }
  };

  const followLink = (link) => {
    // console.log(link);
    window.location.href = link;
  };

  return (
    <div id='contact'
    className='flex flex-col justify-center items-center bg-gradient-to-b from-slate-600 to-black'>
      <div className='flex flex-col justify-evenly p-4 md:flex-row'>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p className='italic'>Mailing Information:</p>
          <p>{data.contact_info.street}</p>
          <p>{data.contact_info.city}, {data.contact_info.state_short}, {data.contact_info.postal}</p>
        </div>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p className='italic'>Phone Number:</p>
          <p>{data.contact_info.mobile}</p>
        </div>
        <div className='text-white text-lg p-8 text-center md:text-left'>
          <p className='italic'>Social Media:</p>
          {(data.contact_info.social_media) &&
            <div>
              {data.contact_info.social_media.map((media) => (
                <button
                  className='pt-2 pr-4'
                  key={shortid.generate()}
                  aria-label={media.title}
                  onClick={() => followLink(`${media.link}`)}
                >
                  {getLinkedIcon(media.title)}
                </button>
              ))}
            </div>
          }
        </div>
      </div>
      <span className="h-1 w-3/4 bg-teal-100 lg:w-1/2"></span>
      <div className='w-full bg-black text-center text-white p-4'>
        <p>2024. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer