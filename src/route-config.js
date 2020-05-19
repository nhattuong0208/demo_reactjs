import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ReadMore from './components/ReadMore';


const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    { 
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    { 
        path: '/login',
        exact: true,
        main: () => <LoginPage  />
    },
    { 
        path: '/readmore',
        exact: true,
        main: () => <ReadMore />
    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
    
];

export default routes;