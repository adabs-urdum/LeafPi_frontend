const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      const str = 'You liked this.';
      return e(
        'h1',
        {
          onClick: () => this.setState({
            liked: false
          })
        },
        str
      );
    }

    return e(
      'button',
      {
        onClick: () => this.setState({
          liked: true
        })
      },
      'Like'
    );
  }
}

export default LikeButton;
