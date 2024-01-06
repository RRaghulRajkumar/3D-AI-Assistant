'use client'

import { useSession ,signOut} from "next-auth/react"
import NewChat from "./NewChat"
import ChatRow from "./ChatRow"
import {useCollection} from "react-firebase-hooks/firestore"
import {collection, orderBy,query} from "firebase/firestore"
import {db} from "../firebase"
import ModelSelection from "./ModelSelection"
import Image from "next/image"
import EmbeddedVideo from "./animation"

function SideBar() {
    const{ data:session}=useSession();
    const [chats,loading,error] = useCollection(
        session && query(collection(db,"users",session.user?.email!,"chats"),orderBy("createdAt",
        "asc"))
    )
  return (
    <div className="p-6 flex flex-col h-screen">
        <div className="flex-1">
        <div>  
        
        <EmbeddedVideo/>
        {/*NewChat */}
        <NewChat/>


        <div className="hidden sm:inline">{/* ModelSelection */}
        <ModelSelection/>
        </div>
        <div className="flex flex-col space-y-2 my-2">
            {loading && (
                <div className="animate-pulse text-center text-white">
                    <p>Loading Chats....</p>
                </div>
            )}
 {/* Map through the chats  */}
 {chats?.docs.map((chat) =>(
                <ChatRow key={chat.id} id={chat.id}/>
            ))}
        </div>

           
        </div>
        </div>
        {session && (
            <img onClick={()=>signOut()} src={session.user?.image!} alt="profile-picture" 
            className="h-15 w-15  animate-pulse rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
            />
        )}
    </div>
  )
}

export default SideBar