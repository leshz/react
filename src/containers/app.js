import React from 'react';
import '../style/app.scss';
import Header from '../components/header/header';
import TimeLine from '../components/timeLine/timeline';
import data from '../info';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <TimeLine data={data.posts} />
      </div>
    </div>
  );
};

export default App;
