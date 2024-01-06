import { type } from "os"
import Chat from "../../../../components/Chat"
import ChatInput from "../../../../components/ChatInput"

type Props={
    params:{
        id:string
    }
}
/*12 */
function ChatPage({params:{id}}:Props) {
  return (
    <div className="flex px-12 p-2 flex-col  h-screen overflow-hidden"> 
    <Chat chatId={id}/>
    <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage