import Image from 'next/image'
import logo from '../public/images/bisu-logo.png'
import instagramLogo from '../public/images/instagram-logo.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center h-screen m-10">
      <div className='p-10 m-1'>
        <Image className="logo" src={logo} alt="Logo bisu" width={300} height={300} quality="100" />
      </div>
      <div className='text-center'>
        <Link
          className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transform transition duration-300 hover:scale-110'
          href='/files/catalogo-bisu-2023.pdf'
          target='_blank'
          locale={false}>
          Descarga el catalogo acá
        </Link>
      </div>
      <div className='m-6'>
        <a className='leading-6' href='https://www.instagram.com/bisu_joyas/' target='_blank' rel="noreferrer">
          <Image className='transform transition duration-300 hover:scale-125' src={instagramLogo} alt="Logo instagram" width={40} height={40} quality="100" />
        </a>
      </div>
    </div>
  )
}