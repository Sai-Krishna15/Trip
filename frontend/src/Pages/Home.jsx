import React from 'react'
import './CSS//Home.css'
import { useEffect,useState } from 'react'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const navigate = useNavigate()
    const [cookies,removeCookie] = useCookies([])
    const [username,setUsername] = useState("")
    useEffect(()=>{
        const verifyCookie = async() =>{
            if(!cookies.token){
                navigate('/login')
            }
            const {data} = await axios.post('http://localhost:4000',
            {},
            {withCredentials:true}
            )
            const {user} = data
            setUsername(user)
        }
        verifyCookie()
    },[cookies,navigate,removeCookie])
    const Logout = () =>{
        removeCookie('token')
        navigate('/')
    }
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
    </>
  )
}

export default Home
