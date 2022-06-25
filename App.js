import React from 'react';
import './config/firebase';
import { ThemeProvider } from 'react-native-elements';
import RootNavigation from './navigation';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}