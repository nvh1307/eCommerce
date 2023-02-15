import { NextPage } from "next";
const Header: NextPage = () => {
    return (
      <div className='text-red-500 pl-10'>
        <nav className="w-1/2">
            <ul className="flex justify-between">
                <li>
                    <a href="" className="inline-block hover:transition hover:duration-1000 hover:text-blue-500">Home</a>
                </li>
                <li>
                    <a href="" className="hover:after:content-['_↗'] inline-block">About Us</a>
                </li>
                <li>
                    <a href="" className="hover:after:content-['_↗'] inline-block">Contact</a>
                </li>
                <li>
                    <a href="" className="hover:after:content-['_↗'] inline-block">Go Home</a>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
  
  export default Header
  