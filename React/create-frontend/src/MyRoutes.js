import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import ProductCard from './UI Components/ProdutCard'
import ProductDetails from './Pages/ProductDetails'
import Checkout from './Pages/Checkout'

const MyRoutes = () =>{
    return (
        <Router>
            <Routes>
                
                <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<Contact />}/>
                <Route path='/about' element={<About />} />
                <Route path='/ProdutCard' element={<ProductCard />}/>
                <Route path='/product-details/:productId' element={<ProductDetails />}/>
                <Route path='/checkout' element={<Checkout />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes