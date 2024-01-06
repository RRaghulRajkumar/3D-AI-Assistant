{/*import { SessionProvider } from "next-auth/react"*/}
import SideBar from "../../components/SideBar"
import "./globals.css"
import {getServerSession} from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "../../components/Login";
import {SessionProvider }from "../../components/SessionProvider"
import ClientProvider from "../../components/ClientProvider";



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions) 
  return (
    <html lang="en">
      <body>
      <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
        <div className='flex'>
          <div className="bg-[#040404] max-w-xs h-screen overflow-y-auto md:min-w-[65rem]">
        <SideBar/>
        </div>
        <ClientProvider/>
      <div className='bg-[#1b1b1c] flex-1'> {children}</div>
      </div>
          )}
    </SessionProvider>
      </body>
    </html>
  )
}
