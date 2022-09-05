import './App.css';
import PreLoginComponent from './components/preLogin/PreLoginComponent';
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <div style={{padding:0, margin:0}}>
      <Routes>
        <Route path='/' element={<Navigate to='/Home' />}/>
        <Route path='/Home' element={<PreLoginComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
