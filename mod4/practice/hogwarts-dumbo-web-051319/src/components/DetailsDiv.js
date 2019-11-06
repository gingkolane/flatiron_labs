import React, { Component } from 'react';

class DetailsDiv extends Component {

  render() { 

    const specialty = this.props.hog.specialty
    const greased = this.props.hog.greased
    const weightRatio = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const medalAchieved = this.props.hog['highest medal achieved']

    return (
      <ul id='detailsDiv'>
        <li>hi from tile DetailsDiv</li>
        <li>{specialty}</li>
        <li>{greased}</li>
        <li>{weightRatio}</li>
        <li>{medalAchieved}</li>
      </ul>
      );
  }
}
 
export default DetailsDiv;