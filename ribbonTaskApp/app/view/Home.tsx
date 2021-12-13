/**
 * Home View: First view that appears when user opens the application
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  useQuery,
  QueryClient,
  QueryClientProvider
} from 'react-query'
import getExchangeRates from '../api/exchangerate';

import ConversionForm from '../component/ConversionForm';
import RateTable from '../component/RateTable';

import { appSubTitle, appTitle, rateTableTitle } from '../config/strings';
import IExchangeRate from '../model/exchangerate.type';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black
  },
  rateRow: {
    color: Colors.black
  }
});

const queryClient = new QueryClient();

const GetRates: React.FC<{}> = () => {

  const { status, data, error } = useQuery<IExchangeRate[], Error>(
    'exchangerates',
    getExchangeRates
    );

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }
  if (status === "error") {
    return <Text>{error!.message}</Text>;
  }
  if (data) {
    return (
      <>
        <ConversionForm data={data} />
        <RateTable data={data} />
      </>
      
    );
  }

  return null;
}



const Section: React.FC<{
  title: string;
}> = ({children, title}) => {

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={styles.sectionTitle}>
        {title}
      </Text>
      <Text
        style={styles.sectionDescription}>
        {children}
      </Text>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={styles.backgroundStyle}>
        <Section title={appTitle}>
          {appSubTitle}
        </Section>
      </View>

      <View
          style={styles.backgroundStyle}>
          <QueryClientProvider client={queryClient}>
            <GetRates></GetRates>
          </QueryClientProvider>
      </View>
      
    </SafeAreaView>
  )
}

export default Home;