import { Outlet } from 'react-router-dom'
import { Home } from './component/Home'
import { Education } from './Pages/education'
import { Main } from './component/main'
import { Navbar } from './component/navbar'

function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <Navbar/>
        <div className="grow overflow-auto">
          <Main/> 
        </div>
    </div>
  )
}

export default App
