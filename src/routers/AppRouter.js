import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';

import { DasboarRoutes } from './DasboarRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
                
            <Routes>
                 
                <Route path='/login' element={< LoginScreen />} />

                <Route path="/*" element={ <DasboarRoutes/> } /> 

            </Routes>
            
    </BrowserRouter>
  ) 

    
};
