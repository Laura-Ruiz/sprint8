import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import Login from "../components/Login"
import { BrowserRouter } from 'react-router-dom';

describe('<Login />', () => {

    const mockIsAuthenticated = true;

    const Button = ({ onClick, children }) => (
        <button onClick={onClick}>{children}</button>
    )

    const mockdataLogin = {
        emailLogin: "prueba@gmail.com"
    }

    it('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Login</Button>)
        fireEvent.click(screen.getByText(/login/i))
        expect(handleClick).toHaveBeenCalledTimes(1)

    })


    it('renders form properly', () => {
        const { getByPlaceholderText } = render(<BrowserRouter><Login dataLogin={mockdataLogin} /></BrowserRouter>);

        const emailLabel = getByPlaceholderText(/Email Address/i);
        expect(emailLabel).toHaveAttribute('type', 'text')

        const passwordLabel = getByPlaceholderText(/Password/i);
        expect(passwordLabel).toHaveAttribute('type', 'password')
    })

    it('btn property', () => {
        const { getByText } = render(<BrowserRouter><Login dataLogin={mockdataLogin} /></BrowserRouter>);

        const btnLabel = getByText(/Login/i);
        expect(btnLabel).toBeInTheDocument()

    })
})

