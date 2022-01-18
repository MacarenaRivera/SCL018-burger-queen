import { PrincipalPage } from './templates/waiter.js';
import { Route, Routes } from 'react-router-dom';

const App = ()=> {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage />} />
      </Routes>
    </>
  );
}

export default App;