import './App.css';

import UserLoginComponent from './components/preLogin/userLogin/UserLoginComponent';

function App() {
  return (
    <div className='row' style={{padding:0, margin:0}}>
      <div className='col-md-8'>
        <UserLoginComponent />
      </div>
      <div className='col-md-4'>
        <UserLoginComponent />
      </div>
    </div>
  );
}

export default App;
