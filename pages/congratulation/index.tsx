import { NextPage } from "next";
import React , {useState , useEffect} from "react";
const Congratulation : NextPage = () => {
    const [countDown, setCountDown ] = useState(10)
            if(countDown > 1){
                setTimeout(() => {
                    setCountDown(countDown -1)
                },500)
                console.log(countDown);
            }else{
                 window.location.href = 'http://localhost:3000/login'
            }
        const handleClickBack = () => {
            window.location.href = 'http://localhost:3000/login'
        }
    return (
        <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
            <div className="w-1/4 h-1/4 bg-white shadow-2xl">
                <div className="bg-gray-500 h-10">
                    <h1 className="text-center leading-10 uppercase text-red-300">Congratulation</h1>
                </div>
                <div className="text-center h-3/5 flex flex-col justify-center">
                    <h3>Chúc mừng bạn đăng ký thành công !!!</h3>
                    <p>Quay lại trang chủ...{countDown}s</p>
                </div>
                <div className="action flex justify-end gap-1 pr-5">
                    <button onClick={handleClickBack} className="border border-2 rounded-xl p-2 hover:bg-blue-200 hover:transition hover:duration-150">Quay lại</button>
                    <button className="border border-2 rounded-xl p-2 hover:bg-blue-200 hover:transition hover:duration-150">Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Congratulation;