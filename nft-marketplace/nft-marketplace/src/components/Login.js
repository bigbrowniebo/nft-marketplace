import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';

function Login(props) {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [walad, setWalad] = useState('')

  const handleSubmit =()=>{
      props.history.push({
        state:email,
        pathname:'/home'
      })
  }

  return (
    <div>
      <center>
        <h1>NFT MarketPlace</h1>
        <br></br>
        <form onSubmit={handleSubmit()}>
            <input style={{width:"30%"}} onChange={(e)=>setEmail(e.target.value)} value={email} name="email" className='form-control' placeholder='Enter Email' type="email"></input>
            <br></br>
            <input style={{width:"30%"}} onChange={(e)=>setPass(e.target.value)} value={pass} name="pass" className='form-control' placeholder='Enter Password' type="password"></input>
            <br></br>
            <input style={{width:"30%"}} onChange={(e)=>setWalad(e.target.value)} value={walad} name="walad" type="text" className='form-control' placeholder='Enter Wallet Address'></input>
            <br></br>
            <input type="submit"></input>
        </form>
      </center>
    </div>
  )
}

export default withRouter(Login)