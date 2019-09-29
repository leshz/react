import React from 'react';
import '../style/app.scss';
import Header from '../components/header/header';
import WriteStade from '../components/writeStade/writeStade';
import TimeLine from '../components/timeLine/timeline';
import data from '../info';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <WriteStade />

        <TimeLine data={data} />
      </div>
    </div>
  );
};

export default App;
