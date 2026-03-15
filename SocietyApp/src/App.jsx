import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './navbar/Header'
import Footer from './navbar/Footer'
import Home from './home/Home'
import NewPerson from './components/NewPerson'
import ListPerson from './components/ListPerson'
import UpdatePerson from './components/UpdatePerson'

function App() {
  return (

      <div className="d-flex flex-column min-vh-100">
        
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPerson />} />
            <Route path="/getAll" element={<ListPerson />} />
            <Route path="/update/:id" element={<UpdatePerson />} />
          </Routes>
        </main>
        <Footer />
         
      </div>
    
  )
}

export default App