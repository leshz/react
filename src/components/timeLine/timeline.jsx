import React from 'react';
import CardStade from '../cardStade/cardStade';
import WriteState from '../stateInput/stateInput';

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
        userName: 'TEST',
        avatarURL: 'https://picsum.photos/280',
        timePost: '0 days',
        contentPost: text,
        reactions: [],
        comments: [],
      },
    };
    const { posts } = this.state;
    posts.push(newPost);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    const cards = posts.map((post, index) => <CardStade key={index} postInfo={post} />);
    return (
      <div>
        <section>
          <WriteState onSubmit={this.makeANewPost} />
        </section>
        {cards}
      </div>
    );
  }
}

export default TimeLine;
