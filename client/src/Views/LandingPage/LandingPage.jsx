import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome</h2>
      <button onClick={() => navigate("/home")}>HOME</button>
    </div>
  )
}

export default LandingPage