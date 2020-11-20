import { render, screen } from '@testing-library/react';
import App from './App';
import Login from "./containers/Login";
import React from "react";

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
