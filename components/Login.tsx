'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import myImage from './Login_image.jpeg'; 
function Login() {
  return (
    <div className="bg-[#000000] h-screen flex flex-col items-center justify-center text-center ">
        <Image className="animate-pulse"
        /*src="https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg"*/
        src={myImage}
        width={300}
        height={300}
        alt="logo"
        />
        <button onClick={()=>signIn('google')} className="text-white font-bold text-3xl animate-pulse">Sign In</button>
    </div>
  )
}

export default Login