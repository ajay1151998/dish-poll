import React from "react";
import { Routes , Route } from 'react-router-dom';
import Dishes from './components/dishes/dishes';
import Login from './components/login/login';
import Result from './components/result';
import Tabs from './components/tabs/tab';
import { Navigate } from 'react-router-dom';
import SelectedDishes from './components/selectedDish';


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Tabs />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/selecteddishes" element={<SelectedDishes />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
