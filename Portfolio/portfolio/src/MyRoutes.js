import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Works from './Pages/Works'
import Contact from './Pages/Contact'

const MyRoutes = () =>{
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Works />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
        </>
    )
}

export default MyRoutes