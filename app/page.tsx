import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className=" text-violet-600 text-5xl">Next js 🔥 </h1>
    </div>
  )
}
