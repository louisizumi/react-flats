import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.details.id);
  }

  render() {
    const {
      id,
      name,
      imageUrl,
      price,
      priceCurrency,
      lat,
      lng
    } = this.props.details;
    return (
      <div
        className="card"
        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${imageUrl}")`, }}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
