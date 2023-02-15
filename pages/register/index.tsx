import { NextPage } from "next"
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Input, listItemTextClasses, Radio, RadioGroup, TextField } from '@mui/material';
import { CheckBox } from "@mui/icons-material";
import { useEffect, useState } from "react";
const Register: NextPage = () => {
    const [fullName, setFullName] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const [gender, setGender] = useState('')
    const [passWord, setPassWord] = useState<string>("")
    const [confirmPassWord, setConfirmPassWord] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [place, setPlace] = useState<string>("")
    const [body, setBody] = useState('');
    const [isPending,setIsPending] = useState(false)
    const handleOnclick = () => {
        window.location.href='http://localhost:3000/login';
    }
    const handleSubmit = (e:any) => {
        window.location.href= 'http://localhost:3000/congratulation'
        setIsPending(true);
        e.preventDefault();
        const listItems = {"username":username, "fullName":fullName , "gender":gender,"password":passWord,"confirmPassWord":confirmPassWord,"email":email,"place":place}
        fetch('http://localhost:8000/items',{
            method:'POST',
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(listItems)
        }).then(() => {
            console.log('ok')
            setIsPending(false);
        })
      
    }
  
    return (
        <div className="bg-gradient-to-r from-sky-500 to-pink-400 w-screen h-screen flex items-center justify-center">
            <form action="" method="get" className="bg-white w-1/4 h-3/4 p-10 flex flex-col justify-around items-stretch rounded-xl">
                <h1 className="uppercase text-center">register</h1>
                <div className="fullName flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">FullName:</label>
                    <Input type="text" name="name" id='name' onChange={e => setFullName(e.target.value)} inputProps={{maxLength:15}} />
                </div>
                <div className="username flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">UserName:</label>
                    <Input type="text" onChange={e => setUserName(e.target.value)}  />
                </div>
                <div className="password flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">Password:</label>
                    <Input type="password" onChange={e =>setPassWord(e.target.value) } />
                </div>
                <div className="confirmPassword flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">Confirm Password:</label>
                    <Input type="password" onChange={e =>setConfirmPassWord(e.target.value)} />
                </div>
                <div className="gender flex justify-around">
                    <FormControl className= "w-full flex flex-row leading-4 justify-around items-center">
                    <label htmlFor="" className="w-1/3 flex justify-start items-center">Gender:</label>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={e => setGender(e.target.value)}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="email flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">Email:</label>
                    <Input type="text" onChange={e=> setEmail(e.target.value)} />
                </div>
                <div className="gender flex justify-around">
                    <label htmlFor="" className="w-1/4 flex justify-start items-center">Place:</label>
                    <Input type="text" onChange={e=> setPlace(e.target.value)} />
                </div>
                <div className="rules flex justify-around">
                    <label htmlFor="" className="w-1/3 flex justify-start items-center pl-4">Rules:</label>
                    <div className="flex flex-col items-end">
                    <Button>Đọc điều khoản</Button>
                    <label htmlFor=""> <Checkbox  defaultChecked /> Tôi chấp nhận điều khoản</label>
                    </div>
                </div>
                <div className="flex justify-end">
                   {!isPending &&  <Button type="button" onClick={handleSubmit} className="hover:bg-gradient-to-r from-sky-500 to-pink-400 hover:text-white hover:transition hover:duration-200">Submit</Button>}
                   { isPending &&  <Button type="button" onClick={handleSubmit} className="hover:bg-gradient-to-r from-sky-500 to-pink-400 hover:text-white hover:transition hover:duration-200" disabled>Submit...</Button>}
                    <Button type="button" onClick={handleOnclick} className="hover:bg-gradient-to-r from-sky-500 to-pink-400 hover:text-white hover:transition hover:duration-200">Cancel</Button>
                </div>
            </form>
        </div>
    )
}
export default Register;