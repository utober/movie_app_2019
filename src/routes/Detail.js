import React from 'react';

// function Detail({location}) {
//   console.log('location', location);
//   return (
//     <h1>detail</h1>
//   );
// }

class Detail extends React.Component {
  componentDidMount() {
    // console.log('this.props', this.props);
    const { location, history } = this.props;
    // console.log('location.state', location.state);
    if (location.state === undefined) {
      history.push("/"); // 리다이렉트
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>
    } else {
      return null;
    }
  }
}

export default Detail;