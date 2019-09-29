import React from 'react';
import '../style/app.scss';
import Header from '../components/header/header';
import WriteStade from '../components/writeStade/writeStade';
import CardStade from '../components/cardStade/cardStade';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <WriteStade />
        <CardStade />
      </div>
    </div>
  );
};

export default App;
