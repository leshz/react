import React from 'react';
import CardStade from '../cardStade/cardStade';
import WriteStade from '../writeStade/writeStade';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const { posts } = data;
    this.state = {
      posts,
    };
    this.makeANewPost = this.makeANewPost.bind(this);
  }

  makeANewPost(ev, text) {
    const newPost = {
      post: {
        userName: 'Jeffer Barragan',
        avatarURL: 'https://picsum.photos/280',
        timePost: '0 days',
        contentPost: text,
        reactions: [],
        comments: [],
      },
    };
    const { posts } = this.state;
    posts.unshift(newPost);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <WriteStade onSubmit={this.makeANewPost} />
        {posts.map((post, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardStade key={index} postInfo={post} />
        ))}
      </div>
    );
  }
}

export default TimeLine;
