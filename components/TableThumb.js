import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import format from 'date-fns/format';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Colors from '../constants/Colors';

export default class TableThumb extends Component {
  static propTypes = {
    number: PropTypes.number,
    size: PropTypes.number,
    status: PropTypes.number,
    time: PropTypes.number,
    checkType: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.getStatus = this.getStatus.bind(this);
    this.getCheckType = this.getCheckType.bind(this);
    this.onMenuPress = this.onMenuPress.bind(this);
  }

  getStatus(status) {
    let tableStatus = '';
    switch (status) {
      case 1:
        tableStatus = 'Checked-in';
        break;
      case 2:
        tableStatus = 'Table closed';
        break;
      default:
        tableStatus = 'Free';
    }
    return tableStatus;
  }

  getCheckType(type) {
    let checkType = '';
    switch (type) {
      case 1:
        checkType = 'One';
        break;
      default:
        checkType = 'Split individualy';
    }
    return checkType;
  }

  onMenuPress() {
    console.log('menu was clicked...');
  }

  render() {
    const {
      number,
      size,
      status,
      time,
      checkType,
    } = this.props.data;

    return (
      <View style={styles.container}>
        <TableHeader
          number={number}
          size={size}
          onMenuPress={this.onMenuPress}
        />
        <TableRow
          text={this.getStatus(status)}
          icon="location-pin"
          higlight={status === 2}
        />
        <TableRow
          text={format(new Date(time), 'DD MMM YYYY HH:mm')}
          icon="clock"
        />
        <TableRow
          text={this.getCheckType(checkType)}
          icon="size-fullscreen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  higlight: {
    color: Colors.higlight,
  },
});
