import { NextPage } from "next";
import Link from "next/link";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField } from '@mui/material';
import { useEffect, useState } from "react";
const Login : NextPage = () => {
    const [listData, setData] = useState([]);
    const [check, setCheck] = useState(false);
    const [userLogin, setUserLogin] = useState('')
    const [passwordLogin, setPassWordLogin] = useState('')
     useEffect(() => {
        fetch('http://localhost:8000/items')
        .then((response) => response.json())
        .then((data) => {return setData(data)});
    },[])
    // const userData= listData.map(rs => rs.username)
    
    
    // const findUser = userData.some(rs => { return rs === userLogin})
    // if(findU)
    
    // const findPassWord = passData.some(rs => {return rs === passwordLogin})
    // console.log("user",findUser)
    // console.log('pass',findPassWord)
    const findUser = listData.filter(data => {return data.username === userLogin})
   
    const submitForm = () => {
        if(findUser){
            if(findUser?.[0]?.password === passwordLogin){
                setCheck(true)
                window.location.href = 'http://localhost:3000'
            }else{
                setCheck(false)
            }
        }
    }
    return(
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-screen h-screen flex justify-center items-center">
            <div className="bg-white w-1/5 h-2/3 rounded-xl">
               <form action="http://localhost:3000" className="p-10 ">
                   <div className="headerForm">
                   <div className="title pt-5">
                        <h3 className="text-2xl uppercase text-center">Login</h3>
                    </div>
                    <div className="userLogin py-3 mt-10 flex flex-col justify-around">
                        <TextField id="outlined-basic" label="Username" placeholder="Type your name" variant="outlined" onChange={e => setUserLogin(e.target.value)}/>
                    </div>
                    <div className="passwordLogin py-3 mt-5 flex flex-col justify-around">
                        <TextField type="password" id="outlined-basic" label="Password" placeholder="Type your password" variant="outlined" onChange={e => setPassWordLogin(e.target.value)} />
                    </div>
                    <div className="forgotPassword mt-4 flex justify-end">
                        <a className="text-sm hover:text-blue-400 transition duration-200 italic" href="#">Forgot Password?</a>
                    </div>
                    <div className="submit">
                        <button type="button" onClick={submitForm} className="w-full rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500 h-10 leading-10 flex justify-center mt-5 hover:bg-gradient-to-l hover:transition hover:duration-300 text-white">Login</button>
                    </div>
                   </div>
                   <div className="iconForm flex flex-col items-center mt-16">
                        <div className="orSign">
                            <Link href="http://localhost:3000/register" className="text-sm hover:text-blue-400 transition duration-200 text-opacity-60 text-gray-600">Or Sign Up using</Link>
                        </div>
                        <div className="icon">
                            <ul className="flex justify-between">
                                <li><a href="https://www.facebook.com"><FacebookRoundedIcon className="text-blue-500 h-9 w-9" /></a></li>
                                <li><a href="https://www.instagram.com/"><InstagramIcon className=" text-red-500 h-9 w-9" /></a></li>
                                <li><a href="https://twitter.com/?lang=en"><TwitterIcon className="text-blue-600 h-9 w-9" /></a></li>
                            </ul>
                        </div>
                   </div>
                   <div className="signUp flex flex-col items-center mt-10">
                        <div className="orSign">
                            <Link href="http://localhost:3000/register" className="cursor-pointer text-xl hover:underline hover:text-blue-400 ">Or Sign Up using</Link>
                        </div>
                        <div className="icon">
                            <Link href="http://localhost:3000/register">Sign Up</Link>
                        </div>
                   </div>
               </form>
            </div>
        </div>
    )
}
export default Login;