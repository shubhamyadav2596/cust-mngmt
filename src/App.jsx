import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Sidebar from './components/Sidebar.jsx';
import CustomerManagement from './pages/CustomerManagement';
import CustomerStats from './pages/CustomerStats';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Sidebar className="" />
          <div className="md:ml-64">
            <Routes>
              <Route path="/" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStats />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;