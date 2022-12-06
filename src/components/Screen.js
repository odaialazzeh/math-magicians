import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="screen-row"><input type="text" value={0} readOnly /></div>;
  }
}
export default Screen;
