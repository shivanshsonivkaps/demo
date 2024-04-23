import React, { useState } from 'react'
import { CiStickyNote, CiLocationOn, CiCalendarDate } from 'react-icons/ci'
import { useAppDispatch } from '../store/hooks.ts'
import { addTodo } from '../features/todoSlice.ts'
const AddTask = ({ changePage }) => {
  const dispatch = useAppDispatch()
  const [taskData, setTaskData] = useState({
    task: '',
    location: '',
    status: 'Pending',
    date: '',
    category: '',
    image: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    let taskList = {}
    taskList[taskData.date] = taskData

    dispatch(addTodo(taskList[taskData.date]))
    // const data = localStorage.getItem('task')
    // if (data) {
    //   let prevData = JSON.parse(data)
    //   prevData[taskData.task] = taskData
    //   localStorage.setItem('task', JSON.stringify(prevData))
    // } else {
    //   localStorage.setItem('task', JSON.stringify(taskList))
    // }
    changePage('view')
  }

  const handleChange = e => {
    const { name, value } = e.target

    setTaskData({ ...taskData, [name]: value })
  }

  //   const handleImage = e => {
  //     console.log(e.target.files)
  //     const file = e.target.files[0]
  //     // setTaskData({ ...taskData, image: file })
  //   }

  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-xl font-bold text-center text-white'>New Task</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {/* Image */}
        {/* <input
          type="file"
          value={taskData.image}
          name="image"
          onChange={handleImage}
          className="file-input w-full max-w-xs"
          accept="image/*"
        /> */}
        {/* Category */}
        <select
          className='select select-bordered w-full'
          name='category'
          required
          onChange={handleChange}
        >
          <option disabled selected>
            Category
          </option>
          <option>Business</option>
          <option>Personal</option>
          <option>Family</option>
          <option>Work</option>
        </select>
        {/* What i have to do  */}
        <label className='input input-bordered flex items-center gap-2'>
          <CiStickyNote />
          <input
            type='text'
            className='grow'
            name='task'
            value={taskData.task}
            placeholder='What i have to do'
            onChange={handleChange}
            required
          />
        </label>
        {/* Location */}
        <label className='input input-bordered flex items-center gap-2'>
          <CiLocationOn />
          <input
            required
            type='text'
            className='grow'
            placeholder='Where'
            value={taskData.location}
            onChange={handleChange}
            name='location'
          />
        </label>
        {/* When */}
        <label className='input input-bordered flex items-center gap-2'>
          <CiCalendarDate />
          <input
            required
            type='date'
            className='grow'
            value={taskData.date}
            name='date'
            onChange={handleChange}
          />
        </label>
        <button type='submit' className='btn'>
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTask
