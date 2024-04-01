'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Rating = ({ rating }: any) => {
  return (
    <CircularProgressbar
      value={rating}
      text={`${rating}`}
      maxValue={10}
      strokeWidth={10}
      styles={buildStyles({
        textSize: '27px',
        pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
      })}
    />
  )
}

export default Rating
