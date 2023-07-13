import React from 'react';
import logo from '../../assets/logo.webp'

const Card = () => {
  const cardStyle = {
    width: '150px',
    height: '200px',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const BgStyle = {
    width: '100%',
    height: '70%',
    backgroundColor: '#862ACF',
  };

  const whiteBottomStyle = {
    width: '100%',
    height: '30%',
    backgroundColor: 'white',
  };

  return (
    // <div style={cardStyle}>
    //   <div style={BgStyle}></div>
    //   <div style={whiteBottomStyle}></div>
    // </div>
    <div
      onClick={() => {
        setPage_signal(item.id);
      }}
    //   key={index}
      className="cursor-pointer  duration-300 transition-all flex-col w-3/12 inline-flex items-center mt-3"
    >
      <img className="rounded-[13px]" src={logo} alt="" />
      <h1 className="text-2xl font-bold mt-3">logo</h1>
    </div>
  );
};

export default Card;
