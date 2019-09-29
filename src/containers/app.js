import React from 'react';
import '../style/app.scss';
import Header from '../components/header/header';
import WriteStade from '../components/writeStade/writeStade';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <WriteStade />
      </div>
    </div>
  );
};

export default App;
