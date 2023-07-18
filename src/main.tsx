import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

import { ThemeContainer } from './components/ThemeContainer/ThemeContainer.tsx';
import { persistor, store } from './redux/store.ts';
import { App } from './components/App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContainer>
            <App />
          </ThemeContainer>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
