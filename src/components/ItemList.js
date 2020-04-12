import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/itemsActions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

/*
We create a function that accepts state and then returns
an object of props. In a simple component like this, I remove
the prefixing for the has/is props as it's obvious that they're related to items.
*/
const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}

/*
we need another function to be able to dispatch our
 itemsFetchData() action creator with a prop.
*/
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

//export default ItemList;
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
