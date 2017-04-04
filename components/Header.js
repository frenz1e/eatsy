import React, {
  Component,
  PropTypes,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CommonStyles from '../constants/Styles';
import Colors from '../constants/Colors';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.left}>
          {this.props.leftButton}
        </View>
        <Text style={styles.text}>{this.props.title}</Text>
        <View style={styles.right}>
          {this.props.rightButton}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundPrimary,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: CommonStyles.header.fontSize,
  },
  left: {
    width: CommonStyles.headerButton.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: CommonStyles.headerButton.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
