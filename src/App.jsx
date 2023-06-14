import './styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Menu from './components/utils/Menu'

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
