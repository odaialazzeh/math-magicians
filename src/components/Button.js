import { PropTypes } from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label } = this.props;
    return <button type="button">{label}</button>;
  }
}

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: '',
};

export default Button;
