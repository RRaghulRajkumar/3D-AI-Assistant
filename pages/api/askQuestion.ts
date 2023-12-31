
import type { NextApiRequest,NextApiResponse } from "next";
import { adminDb} from "../../firebaseAdmin";
import query from "../../lib/queryApi";
import admin from "firebase-admin"
import myImage from './Login_image.jpeg'; 

type Data={
    answer:string
}

export default async function handler( 
    req:NextApiRequest,
    res:NextApiResponse<Data>
){
    const  {prompt,chatId,model,session}=req.body

    if(!prompt){
        res.status(400).json({answer:"please provide a prompt!"})
        return
    }
    if(!chatId){
        res.status(400).json({answer:"please provide a valid chat ID!"})
        return
    }

//3D-AI Query
const response = await query(prompt,chatId,model)


const message:Message={
    text:`${response}` || "AI Assistant was unable to find an answer for that!",
    createdAt:admin.firestore.Timestamp.now(),
    user:{
        _id:"AI Assistant",
        name:"AI Assistant",
        avatar:"https://links.papareact.com/89k"
    },
}
/*https://links.papareact.com/89k */
await adminDb
.collection("users")
.doc(session?.user?.email)
.collection("chats")
.doc(chatId)
.collection("messages")
.add(message)

res.status(200).json({answer:message.text})
}