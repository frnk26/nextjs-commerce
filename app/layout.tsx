import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import Nav from './components/Nav'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // fetch user
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className="px-12 md:px-48">
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      </body>
    </html>
  )
}
