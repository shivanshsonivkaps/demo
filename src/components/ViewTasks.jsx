import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks.ts";

const ViewTasks = () => {
  const [taskList, setTaskList] = useState({});
  const [type, setType] = useState("All");
  const state = useAppSelector((state) => state.todo.todoList);

  // useEffect(() => {
  //   setTaskList(JSON.parse(localStorage.getItem('task')))
  // }, [])

  return (
    <div className='text-white flex flex-col items-center gap-5 w-full justify-center'>
      <p>Your Tasks</p>
      <select
        className='select w-full max-w-xs text-black'
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>All</option>
        <option>Done</option>
        <option>Pending</option>
      </select>
      {taskList ? (
        <div className='flex flex-col gap-5 w-full items-center justify-center'>
          {Object.keys(state)
            .filter((data) =>
              type === "All" ? data : type === taskList[data].status
            )
            .map((data) => {
              const { task, status, location, date, image, category } =
                state[data];
              return (
                <div
                  className=' p-5 border-2 w-6/12 flex  items-center justify-between'
                  key={task}
                >
                  <div>
                    {" "}
                    <div>Category: {category}</div>
                    <div>Task: {task}</div>
                    <div>Location: {location}</div>
                    <div>Date : {date}</div>
                    <div>Status : {status}</div>
                    <button
                      className='btn mt-5 text-black border-none btn-sm'
                      onClick={() => {
                        taskList[data].status = "Done";
                        localStorage.setItem("task", JSON.stringify(taskList));
                        window.location.reload();
                      }}
                    >
                      Mark as done
                    </button>
                  </div>
                  {/* <div className="">
                  <img src={image} alt="Task_Image" />
                </div> */}
                </div>
              );
            })}
        </div>
      ) : (
        <>
          <p>You dont have any task</p>
        </>
      )}
    </div>
  );
};

export default ViewTasks;
