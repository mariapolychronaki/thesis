import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Players } from './Pages/Players';
import { Training } from './Pages/Training';
import { Lineup } from './Pages/Lineup';
import { Matches } from './Pages/Matches';
import Footer from './components/Footer/Footer';
import { routes, authroutes,authroutesPl } from './allRoutes';
import { Provider } from 'react-redux'
import store from './Store/store';
import NavPlayer from './components/Navbar/NavPlayer';
import ModalPlayerUser from './components/Modal/ModalPlayerUser';
import AuthLayout from './Layouts/AuthLayout';
import BlankLayout from './Layouts/BlankRoute';

function App() {

  return (
    <>

      <Provider store={store}>

        <Router>

          <Routes>


            <Route element={<BlankLayout />}>
              {authroutesPl.map((route, index) => (
                // {route.path !== "/log" &&  <Navbar />}
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                  exact
                ></Route>
              ))}
            </Route>

            <Route element={<BlankLayout />}>
              {routes.map((route, index) => (
                // {route.path !== "/log" &&  <Navbar />}
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                  exact
                ></Route>
              ))}
            </Route>

            <Route element={<AuthLayout />}>

              {authroutes.map((route, index) => (
                // {route.path !== "/log" &&  <Navbar />}
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                  exact
                ></Route>
              ))}

            </Route>




          </Routes>



          {/* <NavPlayer />
          <ModalPlayerUser /> */}


        </Router>
      </Provider>

    </>
  );
}

export default App;
