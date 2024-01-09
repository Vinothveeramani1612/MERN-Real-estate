
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './component/Header';
import PrivateRoutes from './component/PrivateRoutes';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing';
import Search from './pages/Search';


export default function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
                  
      <Route path='/' element= {<Home/>} />
      <Route path='/Sign-in' element= {<Signin/>} />
      <Route path='/Sign-up' element= {<Signup/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/search' element={<Search />} />
      <Route path='/listing/:listingId' element= {<Listing/>} />
      <Route element = {<PrivateRoutes />}>
      <Route path='/profile' element= {<Profile/>} />
      <Route path='/create-listing' element= {<CreateListing/>} />
      <Route path='/update-listing/:listingId' element={<UpdateListing />} /> 
      </Route>

    </Routes>
    </BrowserRouter>
  )
}
