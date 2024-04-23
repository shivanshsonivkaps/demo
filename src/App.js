import './App.css'
import ViewTasks from './components/ViewTasks'
import AddTask from './components/AddTask'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Counter from './components/Counter.tsx'
import { store, persistor } from './store/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ClassComponent from './components/ClassComponent.tsx'
function App() {
  const [showPage, setShowPage] = useState('view')
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar setShowPage={setShowPage} />
        <div className='w-screen min-h-screen h-full flex flex-col items-center justify-center bg-grad'>
          {/* {showPage === 'add' && <AddTask changePage={setShowPage} />} */}
          {/* {showPage === 'view' && <ViewTasks changePage={setShowPage} />} */}
          <ClassComponent />
          {/* <Counter /> */}
          {/* <TaskDetail /> */}
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
