import React, { Component } from 'react';

class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity;

    if (newValue >= 0.2) {
      return (
          <div>
              <ColorBox opacity={newValue} />
              newValue = newValue - 0.1;
          </div>
        );
    } else {
        return null;
    };
  };
};

export default ColorBox;