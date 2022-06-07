import React from 'react'
const Dummy = ({ title, notImg, searchImg, text, profileImg }) => {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0",
      padding:"0 20px"

    }}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <img src={searchImg} alt="" style={{
          paddingLeft: "500px"
        }} />
        <img src={notImg} alt="" style={{
          padding: "0 10px",
          borderRight: "1px solid rgba(185, 178, 178, 0.247)"
        }} />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      alignItems: "center",
        
      }}>
        <span>{text}</span>
        <img src={profileImg} alt="" style={{

          width: "50px",
          height: "50px",
          padding: "0 10px",
          borderRadius: "50%",

        }} />
      </div>

    </header>
  )
}

export default Dummy