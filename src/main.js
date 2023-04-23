import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';


function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeView />} exact></Route>
            <Route path="/mentors" element={<ProfileView />} exact></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
