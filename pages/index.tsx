import Image from 'next/image'
import logo from '../public/images/bisu-logo.png'
import instagramLogo from '../public/images/instagram-logo.svg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-10">
      <div className='p-10'>
        <Image src={logo} alt="Logo bisu" width={348} height={444} quality="100" />
      </div>
      <div className='m-6'>
        <a className='leading-6' href='https://www.instagram.com/bisu_joyas/' target='_blank' rel="noreferrer">
          <Image className='transform transition duration-300 hover:scale-125' src={instagramLogo} alt="Logo instagram" width={60} height={60} quality="100" />
        </a>
      </div>
    </div>
  )
}