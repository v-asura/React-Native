import React, { useState } from 'react';
import { AppwriteProvider } from './appwrite/AppwriteContext'; // Correct path to AppwriteContext
import {Router} from './routes/Router';

const App = () => {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
};

export default App;
