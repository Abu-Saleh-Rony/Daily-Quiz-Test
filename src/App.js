import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main> </Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Topics></Topics>
        }

      ]
    }
  ])




  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
