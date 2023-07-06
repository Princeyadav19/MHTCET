import React, { useEffect } from 'react'

const ProgressBars = ({ bgcolor, progress }) => {
  
  const Parentdiv = {
    height: "14px",
    width: '100%',
    backgroundColor: '#ceb1de',
    borderRadius: 40,
  }

  const Childdiv = {
    display: "flex",
    "justifyContent": "end",
    "alignItems": "center",
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    "marginRight": "6px",
    "fontSize": "12px",
    color: 'white',
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}`}</span>
      </div>
    </div>
  )
}

export default ProgressBars
