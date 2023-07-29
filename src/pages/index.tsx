import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      

      <div>
        <Image
          src="/yey.gif"
          alt="Yey"
          width={500}
          height={226}
          priority
        />
      </div>

      
  )
}
