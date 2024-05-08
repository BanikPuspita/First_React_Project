import React from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

