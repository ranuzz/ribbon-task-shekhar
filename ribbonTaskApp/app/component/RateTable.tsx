import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import IExchangeRate from '../model/exchangerate.type';

const styles = StyleSheet.create({
  ratelistStyle: {
    backgroundColor: Colors.black,
    margin: 10,
    padding: 10
  }
});

/**
 * Rate Table: stylised as proper row and column using sample found online
 */
const RateTable: React.FC<{
  data: IExchangeRate[]
}> = ({data}) => {
  return (
    <View style={styles.ratelistStyle}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>Country</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>Symbol</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>Amount</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>Rate</Text></View>
      </View>
    </View>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>{item.country}</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>{item.code}</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>{item.amount}</Text></View>
          <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>{item.rate}</Text></View>
        </View>
      )}
      >
    </FlatList>
    </View>
  );
}

export default RateTable;