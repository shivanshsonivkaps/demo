import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks.ts'
import { decrement, increment } from '../features/counterSlice.ts'

const Counter = () => {
  const store = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className='flex items-center justify-center flex-col gap-5'>
      {store}
      <div className='flex gap-5'>
        <button onClick={() => dispatch(increment())} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='btn'>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
