import React from 'react';
   import { Provider } from 'react-redux';
   import store from './redux/store';
   import AppRouter from './router/AppRouter';
   import './App.css'

   const App: React.FC = () => (
        <div className="App">
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
   );

   export default App;