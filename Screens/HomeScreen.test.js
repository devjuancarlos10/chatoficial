// HomeScreen.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('navigates to chat screen on button press', () => {
    const { getByText } = render(<HomeScreen />);
    
    // Simular presionar el botón "Ir al Chatbot"
    fireEvent.press(getByText('Ir al Chatbot'));

    // Aquí puedes agregar expectativas para verificar la navegación
  });

  it('logs out user on logout button press', async () => {
    const { getByText } = render(<HomeScreen />);
    
    // Simular presionar el botón "Cerrar Sesión"
    fireEvent.press(getByText('Cerrar Sesión'));

    // Aquí puedes agregar expectativas para verificar el logout
  });
});
