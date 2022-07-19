import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <img className='pokemon-image' src={image} alt={name} />
        <div className='pokemon-info'>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {value} {measurementUnit}
          </p>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Pokemon;
