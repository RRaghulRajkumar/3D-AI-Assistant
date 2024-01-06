import {DocumentData} from "firebase/firestore"
import Image from "next/image"
import React, { useEffect } from "react";
import { useRef } from "react";
import EmbeddedVideo from "./animation";
import { useState } from "react";
/*const texts=`Sure ${message.text} Hope i Answered Your Question. Have A Great Day. ` */
type Props={
    message:DocumentData
}

function Message({message}:Props) {
const handleclick=()=>{ 
const texts=`${message.text}`
const value= new SpeechSynthesisUtterance(texts)
window.speechSynthesis.speak(value)
}
// Toggle speaking status


/*
useEffect(() => {
  // Automatically speak the message when the component mounts
  const texts = `${message.text}`;
  const value = new SpeechSynthesisUtterance(texts);
  window.speechSynthesis.speak(value);
}, [message]);
*/
/* max-w-sm   */
/*max-w-sm , mx-auto in the second div tag     */
const isAIAssistant = message.user.name === "AI Assistant"    
  return ( 
    <div className={`py-5 text-black ${isAIAssistant && "bg-[#8fa3fa]  rounded-lg"}`}>
        <div className="flex space-x-5 flex-col  px-10 py-4 max-w-sm  mx-auto bg-white rounded-lg shadow-md">
        <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-lg max-w-sm"/>
        <p className="pt-1 text-sm">
             {message.text}
            </p>
            <button onClick={handleclick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow">speech</button>
            
        </div>
    </div>
  )
}

export default Message
