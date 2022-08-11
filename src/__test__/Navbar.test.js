import React from 'react';
import { screen, render, } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom';

describe('<Navbar />', () => {

    const mockUserLogin = true;

    it('Render Log in and Sign up links when user is logged', () => {
        render(
            <BrowserRouter><Navbar userLogin={mockUserLogin} /></BrowserRouter>);

        expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
        expect(screen.getByText(/LOG OUT/i)).toBeInTheDocument();
    })

    it('Render Log in and Sign up links when user not logged', () => {
        render(
            <BrowserRouter><Navbar /></BrowserRouter>);

        expect(screen.getByText(/LOG IN/i)).toBeInTheDocument();
        expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument();
    })

})

