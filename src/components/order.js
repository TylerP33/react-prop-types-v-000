import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
 
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

// default props set

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool
  size: PropTypes.string
  scoops: PropTypes.arrayOf(PropType.string).isRequired
    orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};

//isRequired makes sure the scoops prop is provided when rendering the component
//to further validate, let's tell the compononent we are expecting an array of strings