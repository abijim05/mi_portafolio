import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import RepositoryDetail from './components/RepositoryDetail';
import Navbar from './components/Navbar';
import './App.css'; // Importa estilos globales si los tienes

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/repositories" element={<Repositories />} />
                    <Route path="/repository/:id" element={<RepositoryDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
