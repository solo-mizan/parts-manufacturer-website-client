import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Pages/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ProductPurchase from './Pages/ProductPurchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

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
          <Route path='/product/:id' element={<ProductPurchase/>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </QueryClientProvider>
    </>
  );
}

export default App;
