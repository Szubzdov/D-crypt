import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './main/pages/Home'
import Header from './header/Header';
import Users from './users/pages/Users';
import ViewUser from './users/pages/ViewUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Users/>}/>
          <Route path='/contacts/:id_user' element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
