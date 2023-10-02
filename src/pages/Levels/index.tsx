import React from 'react';
// import type {PropsWithChildren} from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';
import {imagesUrls} from '../../images';
import LevelsButton from '../../components/LevelsButton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const levelsData = [
  {
    label: 'LEVEL1',
    bottom: 120,
    left: 120,
    bgColor: '#FE9D4B',
    icon: 'Hi',
  },
  {
    label: 'LEVEL2',
    bottom: 300,
    left: 70,
    bgColor: '#cc66ff',
    icon: 'Hi',
  },
  {
    label: 'LEVEL3',
    bottom: 300,
    left: 240,
    bgColor: '#37AFFC',
    icon: 'Hi',
  },
  {
    label: 'LEVEL4',
    bottom: 480,
    left: 160,
    bgColor: '#A7DA63',
    icon: 'Hi',
  },
];

function Levels({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.scrollView}>
          {/* <Image style={styles.bgImg} source={imagesUrls.levelsBg} /> */}
          <Image style={styles.bgImg} source={imagesUrls.levelsBg} />
          <View style={styles.btnsWrapper}>
            {levelsData.map((item: any) => (
              <View
                key={item.label}
                style={{
                  position: 'absolute',
                  ...item,
                }}>
                <LevelsButton
                  text={item.label}
                  bgColor={item.bgColor}
                  navigation={navigation}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000c0',
  },
  btnsWrapper: {
    position: 'absolute',
    height: height,
    width: width,
  },
  bgImg: {
    height: height,
    width: width,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    resizeMode: 'cover',
  },
  btnsBox: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // marginBottom: 25,
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Levels;
