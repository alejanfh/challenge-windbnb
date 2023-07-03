import Image from 'next/image'
import logoWindbnbImage from '../../app/assets/images/logo.png'

const LogoWindbnb = () => {
  return (
    <div className='flex'>
      <Image
        priority
        src={logoWindbnbImage}
        alt='Logo'
        className='w-[96px] h-[20px]'
      />
    </div>
  )
}

export default LogoWindbnb
