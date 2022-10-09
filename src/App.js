import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import News from './components/News/News';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'home',
          element: <Home></Home>
        },
        {
          path: 'team',
          element: <Team></Team>,
          loader: ()=> fetch('team.json')
        },
        {
          path:'news',
          element: <News></News>,
          loader: ()=> fetch('news.json')
        },
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
    ,{
      path:'about',
      element: <About></About>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
