import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const LevelsButton = ({text, bgColor, navigation}: any) => {
  const onPress = () => navigation.navigate('Story');

  return (
    <View>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: bgColor}}
        onPress={onPress}>
        <Text>iCON</Text>
      </TouchableOpacity>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7f50',
    padding: 10,
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderColor: '#ffffff90',
    borderWidth: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default LevelsButton;
