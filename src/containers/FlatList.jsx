import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../containers/Flat.jsx';

class FlatList extends Component {

  componentWillMount() {
    debugger
    this.props.setFlats();
    // dispatch an action to update the redux State tree (flats)
  }

  render() {
    return (
      <div className='flat-list col-sm-7'>
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
