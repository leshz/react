import React from 'react';
import CardStade from '../cardStade/cardStade';

class TimeLine extends React.Component {

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { posts } = this.props.data;
    // eslint-disable-next-line react/no-array-index-key
    return posts.map((post, index) => <CardStade key={index} postInfo={post} />);
  }

}

export default TimeLine;
