import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Header from './components/Header';
import Login from './Auth/Login'
import Logout from './Auth/Logout'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/logged" element={<Logout />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
