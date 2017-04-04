import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const TableRow = ({text, icon, higlight}) => (
  <View style={styles.container}>
    {(icon ? <SimpleLineIcons name={icon} size={22} color={Colors.iconsDef} style={styles.icon} /> : null)}
    <Text style={[styles.text, (higlight ? styles.higlight : {})]}>{text}</Text>
  </View>
);

TableRow.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default TableRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: Colors.borderDef,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: Colors.text,
  },
  higlight: {
    color: Colors.higlight,
  },
});
