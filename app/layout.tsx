import { getServerSession } from 'next-auth'
import Login from '../components/Login'
import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import ClientProvider from '../components/ClientProvider'
export const metadata = {
  title: 'ChatGpt Clone',
  description: 'It is clone of chatgpt',
}

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html>
      <body> 
      <SessionProvider session={session}>
       {!session ? (
       <Login />
       
        ) : (
       
         <div className='flex'>
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
            <SideBar />
           </div>
            <ClientProvider />
            <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
        )}
        </SessionProvider> 
      </body>
    </html>
  )
}
