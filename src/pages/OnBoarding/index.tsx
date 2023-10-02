import React, {useRef, useState, useCallback} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import CloudLogo from '../../images/onBoarding/CloudLogo.svg';
import Play from '../../images/onBoarding/Play.svg';
import Learn from '../../images/onBoarding/Learn.svg';
import Shine from '../../images/onBoarding/Shine.svg';

// const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DATA = [
  {
    title: 'PLAY',
    description: 'Fun Filled Gamified Learning Experience for Kids',
  },
  {
    title: 'LEARN',
    description: 'Voice-Powered Lessons for an Interactive Learning Experience',
  },
  {
    title: 'SHINE',
    description: 'Outshine the Stars with Our Personalized Learning Content!',
  },
];

const OnBoarding = ({navigation}: any) => {
  // console.log(navigation);
  const swiperRef = useRef<any>(null);
  const [idx, setIdx] = useState(0);
  const onNextHandler = useCallback(() => {
    const index = swiperRef?.current.getCurrentIndex();
    if (index === DATA.length - 1) {
      navigation.navigate('levels');
    } else {
      swiperRef?.current.scrollToIndex({
        index: index + 1,
        animated: true,
      });
      setIdx(index + 1);
    }
  }, [navigation]);
  const onPaginationHandler = useCallback((index: number) => {
    setIdx(index);
    swiperRef?.current.scrollToIndex({index, animated: true});
  }, []);
  const onSkipHandler = useCallback(() => {
    navigation.navigate('levels');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <CloudLogo width="100%" height="100%" />
      </View>
      <SwiperFlatList
        index={idx}
        data={DATA}
        renderItem={({item, index}) => (
          <View style={[styles.child]}>
            <View style={styles.imgWrapper}>
              {index === 0 ? <Play width="100%" height="100%" /> : null}
              {index === 1 ? <Learn width="100%" height="100%" /> : null}
              {index === 2 ? <Shine width="100%" height="100%" /> : null}
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </View>
        )}
        ref={swiperRef}
        onChangeIndex={({index}) => {
          setIdx(index);
        }}
      />
      <View style={styles.paginationWrapper}>
        {DATA.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.pagination,
              // eslint-disable-next-line react-native/no-inline-styles
              {backgroundColor: idx === index ? '#FF6B6B' : '#707070'},
            ]}
            onPress={() => onPaginationHandler(index)}
          />
        ))}
      </View>
      <View>
        <TouchableOpacity style={styles.nextBtn} onPress={onNextHandler}>
          <Text style={styles.nextBtnTxt}>
            {idx === DATA.length - 1 ? 'Done' : 'Next'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipBtnTxt} onPress={onSkipHandler}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
  child: {justifyContent: 'center', width, marginTop: 32},
  logo: {
    width,
    height: 65,
    marginTop: 32,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  imgWrapper: {
    width: width - 20,
    height: 320,
    marginBottom: 16,
  },
  textWrapper: {
    width,
  },
  nextBtn: {
    backgroundColor: '#00B5D8',
    marginTop: 32,
    textAlign: 'center',
    padding: 12,
    borderRadius: 22,
    marginHorizontal: 18,
  },
  nextBtnTxt: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  skipBtn: {
    backgroundColor: '#ffffff',
    marginVertical: 16,
    textAlign: 'center',
    padding: 16,
  },
  skipBtnTxt: {
    textAlign: 'center',
    // fontWeight: 'bold',
    color: '#000000',
    fontSize: 18,
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width,
    gap: 16,
  },
  pagination: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
});

export default OnBoarding;
