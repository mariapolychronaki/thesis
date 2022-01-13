import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Players } from './Pages/Players';
import { Training } from './Pages/Training';
import { Lineup } from './Pages/Lineup';
import { Matches } from './Pages/Matches';
import Footer from './components/Footer/Footer';
import { routes } from './allRoutes';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>

          {routes.map((route, index) => (
            // {route.path !== "/log" &&  <Navbar />}
            <Route
              key={index}
              path={route.path}
              element={route.component}
              exact
            ></Route>
          ))}

        </Routes>

        <Footer />
      </Router>


    </>
  );
}

export default App;
