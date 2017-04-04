import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Header from './components/Header';
import TableList from './components/TableList';
import TempData from './constants/TempData';
import Colors from './constants/Colors';

class App extends React.Component {
  constructor() {
    super();
    this.tableListData = TempData.tables || [];
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Sprazzo Cucina"
          leftButton={<SimpleLineIcons name="menu" size={24} color={Colors.iconsDef} />}
        />
        <TableList
          data={this.tableListData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDef,
    paddingTop: Platform.OS === 'ios' ? 24 : 24,
  },
});

Expo.registerRootComponent(App);
