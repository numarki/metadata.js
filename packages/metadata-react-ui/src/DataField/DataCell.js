import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FieldSelect from './FieldSelect'


const ExcelColumn = {
  name: React.PropTypes.string.isRequired,
  key: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  filterable: React.PropTypes.bool
};

class DataCell extends Component {

  static propTypes = {
    options: React.PropTypes.array.isRequired,
    column: React.PropTypes.shape(ExcelColumn),
    value: React.PropTypes.array
  }

  // props.column.key, props.rowData(._row)

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      _meta: props._meta || props.rowData._metadata(props.column.key)
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  getInputNode() {
    return ReactDOM.findDOMNode(this);
  }

  getValue() {
    let updated = {};
    updated[this.props.column.key] = this.state.value;
    return updated;
  }

  handleSelectChange(value) {
    this.setState({value});
  }

  render() {

    const _obj = this.props.rowData;
    const _fld = this.props.column.key
    const _val = _obj[_fld];
    const subProps = {
      _meta: this.state._meta,
      _obj: _obj,
      _fld: _fld,
      _val: _val,
      _hide_label: true,
      handleValueChange: this.handleSelectChange
    }

    return (
      <FieldSelect {...subProps} />
    );
  }
}

export default DataCell;
