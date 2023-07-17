"use client"
import Image from "next/image"
import { signIn } from "next-auth/react"
 function Login() {
  return (
    <div className="bg-[#11A37f] h-screen flex flex-col items-center justify-center text-center"> 
        <Image 
         src="https://links.papareact.com/2i6"
          width={300}
          height={300}
          alt="Logo"
          />
         <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">Sign In to use ChatGpt</button>

    </div>
  )
}

export default Login