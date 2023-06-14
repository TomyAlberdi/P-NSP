import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
