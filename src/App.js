import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Pages/Blog';
import Addproduct from './Pages/Dashboard/Addproduct';
import Addreview from './Pages/Dashboard/Addreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Manageorders from './Pages/Dashboard/Manageorders';
import Manageproducts from './Pages/Dashboard/Manageproducts';
import Myorder from './Pages/Dashboard/Myorder';
import Myprofile from './Pages/Dashboard/Myprofile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ProductPurchase from './Pages/ProductPurchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/product/:id' element={<ProductPurchase />}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Myprofile></Myprofile>}></Route>
            <Route path='myorders' element={<Myorder></Myorder>}></Route>
            <Route path='addreview' element={<Addreview></Addreview>}></Route>
            <Route path='manageorders' element={<RequireAdmin><Manageorders></Manageorders></RequireAdmin>}></Route>
            <Route path='addproduct' element={<RequireAdmin><Addproduct></Addproduct></RequireAdmin>}></Route>
            <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
            <Route path='manageproducts' element={<RequireAdmin><Manageproducts></Manageproducts></RequireAdmin>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </QueryClientProvider>
    </>
  );
}

export default App;
