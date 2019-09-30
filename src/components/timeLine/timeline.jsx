import React from 'react';
import CardStade from '../cardStade/cardStade';
import WriteState from '../stateInput/stateInput';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.makeANewPost = this.makeANewPost.bind(this);
    const { data } = this.props;
    this.state = { posts: data };
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
    posts.push(newPost);
    this.setState({ posts });
  }

  render() {

    const { posts } = this.state;

    return (
      <div>
        <section>
          <WriteState onSubmit={this.makeANewPost} />
        </section>
        { posts.map((post, index) => {
          return <CardStade key={index} postInfo={post} />;
        })}
      </div>
    );
  }
}

export default TimeLine;
