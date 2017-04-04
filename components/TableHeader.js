import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class TableHeader extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    onMenuPress: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.renderMenuButton = this.renderMenuButton.bind(this);
  }

  renderMenuButton() {
    return (
      <TouchableOpacity
        style={styles.menu}
        onPress={this.props.onMenuPress}>
        <SimpleLineIcons
          name="options-vertical"
          size={26}
          color={Colors.iconsDef}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <View style={styles.info}>
          <View style={styles.number}>
            <Text style={styles.numberText}>Table {this.props.number}</Text>
          </View>
          <Text style={styles.size}>{this.props.size} people</Text>
        </View>
        {this.props.onButtonPress ? this.renderMenuButton() : null}
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
    marginRight: 10,
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
});
