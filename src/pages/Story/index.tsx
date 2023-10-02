import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Story(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.story}>Story comes Here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  story: {
    fontWeight: 'bold',
    fontSize: 24
  },
});

export default Story;
