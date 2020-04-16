/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Calendar } from 'react-native-calendars';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <Calendar
    
            markedDates={{
        
              '2020-04-21': {disabled: true, disableTouchEvent: true},
              '2020-04-22': {disabled: true, disableTouchEvent: true},


              '2020-04-04': {disabled: true, disableTouchEvent: true},
              '2020-04-05': {disabled: true, disableTouchEvent: true},
              '2020-04-11': {disabled: true, disableTouchEvent: true},
              '2020-04-12': {disabled: true, disableTouchEvent: true},
              '2020-04-18': {disabled: true, disableTouchEvent: true},
              '2020-04-19': {disabled: true, disableTouchEvent: true},
              '2020-04-25': {disabled: true, disableTouchEvent: true},
              '2020-04-26': {disabled: true, disableTouchEvent: true}
              
            }}

          />

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
