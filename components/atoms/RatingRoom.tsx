interface RatingRoomProps {
  rating: number
}

const RatingRoom = (props: RatingRoomProps) => {
  const { rating } = props
  return (
    <div className='flex items-center'>
      <span>★</span>
      <p className=' text-properties leading-properties text-gray'>{rating}</p>
    </div>
  )
}

export default RatingRoom
