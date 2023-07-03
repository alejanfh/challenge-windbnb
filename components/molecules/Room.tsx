import RatingRoom from '../atoms/RatingRoom'
import Image from 'next/image'

interface RoomProps {
  infoRoom: RoomInterface
}

const Room = (props: RoomProps) => {
  const { infoRoom } = props
  return (
    <div className='flex flex-col w-[400px] mobile:w-[350px] gap-[10px]'>
      <Image
        priority
        src={infoRoom.photo}
        alt='Image room'
        width={395}
        height={270}
        className='w-[395px] h-[270px] mobile:w-[350px] mobile:h-[240px] rounded-[24px]'
      />
      <div className='flex justify-between '>
        <div className='flex gap-[8px]'>
          {infoRoom.superHost ? (
            <div className='w-[100px] flex justify-center items-center mobile:w-[89px] rounded-[12px] border-[2px] border-solid border-gray'>
              <p className=' text-superhost leading-superhost text-gray font-bold'>
                SUPER HOST
              </p>
            </div>
          ) : null}
          {infoRoom.beds ? (
            <div className='flex gap-[5px] items-center text-properties leading-properties text-gray3 font-medium'>
              <h3>{infoRoom.type}</h3>
              <span>.</span>
              <h3>{infoRoom.beds} beds</h3>
            </div>
          ) : (
            <div className='flex gap-[5px] items-center text-properties leading-properties text-gray3 font-medium'>
              <h3>{infoRoom.type}</h3>
            </div>
          )}
        </div>
        <RatingRoom rating={infoRoom.rating} />
      </div>
      <h2 className=' text-description truncate leading-description text-black font-semibold'>
        {infoRoom.title}
      </h2>
    </div>
  )
}

export default Room
