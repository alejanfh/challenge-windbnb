import dataRooms from '@/utils/cities.json'
import Room from '../molecules/Room'

const AllRooms = () => {
  return (
    <section className='grid mobile:flex mobile:flex-col mobile:items-center gap-[20px] grid-cols-3 justify-items-center'>
      {dataRooms.map((room, index) => (
        <Room infoRoom={room} />
      ))}
    </section>
  )
}

export default AllRooms
