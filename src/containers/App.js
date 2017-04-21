import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FieldsSelector from './../components/FieldsSelector';
//import FilterList from './FilterList';
import * as actionCreators from '../actionCreators';

class App extends Component {
  render() {
    const {selectedFields, availableFields, actions} = this.props;
    return (
      <div>
        <FieldsSelector
          available={availableFields}
          selected={selectedFields}
          onSelect={actions.selectField}
          onUnselect={actions.unselectField} />

        //<FilterList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFields: state.get('selectedFields'),
    availableFields: state.get('availableFields')
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
