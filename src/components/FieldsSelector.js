import React, {Component} from 'react';
import StringWidget from '../components/StringWidget';

class FieldsSelector extends Component {
  render() {
    const {available} = this.props;
    return (
      <div>
        <h3>Fields</h3>
        <ul>{available.map(this.renderField.bind(this))}</ul>
      </div>
    );
  }

  renderField(field) {

    const name = {name: 'abcd', displayName: 'lkdfsg', widget: StringWidget};
    const {selected, onSelect, onUnselect} = this.props;
    const checked = selected.contains(field);
    const onChange = (e) => {
      if (e.target.checked) {
        onSelect(field);
      } else {
        onUnselect(field);
      }
    };

    return (
      <li key={name.displayName}>
        <label>
          <input type="checkbox" checked={checked} onChange={onChange} />
          {name.displayName}
        </label>
      </li>
    );
  }
}

export default FieldsSelector;
