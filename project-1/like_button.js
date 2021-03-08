'use strict';

const e = React.createElement;

//const jsx= <iframe src="https://devpractical.substack.com/embed" width="400" height="100" style="border:none; background:white;" frameborder="0" scrolling="no"></iframe>;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'I liked that button';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}




const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
