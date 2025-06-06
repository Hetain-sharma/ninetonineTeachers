// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
//   PixelRatio,
//   Animated,
//   Easing,
// } from 'react-native';
// import COLORS from '../constants/color';
// import AssetsStock from '../constants/ImagesContants';
// const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// const scale = SCREEN_WIDTH / 375;

// function normalize(size) {
//   const newSize = size * scale;
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize));
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
//   }
// }

// const IntroScreen = ({navigation}) => {
//   const dispatch = useDispatch();

//   // Create animated values for both coins
//   const rightBounceValue = new Animated.Value(0);
//   const leftBounceValue = new Animated.Value(0);

//   // Bounce animation function
//   const startBounceAnimation = animatedValue => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(animatedValue, {
//           toValue: -10,
//           duration: 1000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//         Animated.timing(animatedValue, {
//           toValue: 0,
//           duration: 1000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//       ]),
//     ).start();
//   };

//   useEffect(() => {
//     startBounceAnimation(rightBounceValue);
//     startBounceAnimation(leftBounceValue);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Left Coin with animation */}
//       <View style={[styles.topLeftContainer]}>
//         <Image
//           source={AssetsStock.book}
//           style={styles.topLeftLogo}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Right Coin with animation */}
//       <Animated.View
//         style={[
//           styles.topRightContainer,
//           {
//             transform: [{translateY: rightBounceValue}],
//           },
//         ]}>
//         <Image
//           source={AssetsStock.coins}
//           style={styles.topRightLogo}
//           resizeMode="contain"
//         />
//       </Animated.View>

//       {/* Main Content */}
//       <View style={styles.contentContainer}>
//         <View style={{marginBottom: normalize(70)}}>
//           <Image
//             source={AssetsStock.logo}
//             style={styles.image}
//             resizeMode="contain"
//           />
//           <Text style={styles.beta}>BETA</Text>
//         </View>
//         <View style={styles.textContainer}>
//           <Text style={styles.heading}>Join With 10k Other People</Text>
//           <Text style={styles.subText}>
//             Join with us and find your best preschool
//           </Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               dispatch(setRegistered(false)); // user not registered yet
//               navigation.navigate('OnBoarding');
//             }}>
//             <Text style={styles.buttonText}>Join 9to9 School</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               dispatch(setRegistered(true)); // user is registered
//               navigation.navigate('OnBoarding');
//             }}>
//             <Text style={styles.buttonText}>My Child’s Dashboard</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#6B5EBB',
//     padding: normalize(40),
//   },
//   topLeftContainer: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
//     left: normalize(20),
//     zIndex: 1,
//   },
//   topRightContainer: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
//     right: normalize(20),
//     zIndex: 1,
//   },
//   topLeftLogo: {
//     width: normalize(60),
//     height: normalize(80),
//     padding: normalize(50),
//   },
//   topRightLogo: {
//     width: normalize(50),
//     height: normalize(200),
//     padding: normalize(30),
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: SCREEN_WIDTH * 0.8,
//     height: SCREEN_HEIGHT * 0.25,
//     maxWidth: 300,
//     maxHeight: 200,
//     // marginBottom: normalize(70),
//   },
//   textContainer: {
//     width: '90%',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: normalize(32),
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: normalize(10),
//     marginTop: normalize(10),
//   },
//   subText: {
//     fontSize: 16,
//     width: '100%',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginVertical: normalize(50),
//     lineHeight: normalize(42),
//   },
//   button: {
//     backgroundColor: '#FFFFFF',
//     textAlign: 'center',
//     justifyContent: 'center',
//     paddingVertical: normalize(10),
//     paddingHorizontal: normalize(30),
//     alignItems: 'center',
//     width: '90%',
//     height: normalize(50),
//     borderWidth: 3,
//     borderColor: '#D8D5EA',
//     borderRadius: 50,
//     maxWidth: 500,
//     marginBottom: 10,
//   },
//   buttonText: {
//     fontSize: normalize(16),
//     fontWeight: '500',
//     color: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   beta: {
//     alignSelf: 'flex-end',
//     marginRight: 40,
//     color: COLORS.white,
//     fontFamily: 'Poppins-Bold',
//   },
// });

// export default IntroScreen;
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
  Animated,
  Easing,
} from 'react-native';
import COLORS from '../constants/color';
import AssetsStock from '../constants/ImagesContants';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../navigation/RoutesContants';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const IntroScreen = () => {
  const rightBounceValue = new Animated.Value(0);
  const leftBounceValue = new Animated.Value(0);
  const navigation = useNavigation();

  const startBounceAnimation = animatedValue => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: -10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startBounceAnimation(rightBounceValue);
    startBounceAnimation(leftBounceValue);
  }, []);

  return (
    <View style={styles.container}>
      {/* Left Image */}
      <View style={[styles.topLeftContainer]}>
        <Image
          source={AssetsStock.book}
          style={styles.topLeftLogo}
          resizeMode="contain"
        />
      </View>

      {/* Right Animated Image */}
      <Animated.View
        style={[
          styles.topRightContainer,
          {transform: [{translateY: rightBounceValue}]},
        ]}>
        <Image
          source={AssetsStock.coins}
          style={styles.topRightLogo}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Center Content */}
      <View style={styles.contentContainer}>
        <View style={{marginBottom: normalize(70)}}>
          <Image
            source={AssetsStock.logo}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.beta}>BETA</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Join With 10k Other People</Text>
          <Text style={styles.subText}>
            Join with us and find your best preschool
          </Text>

          {/* 🔘 Single Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(SCREENS.MAIN_SCREEN)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B5EBB',
    padding: normalize(40),
  },
  topLeftContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
    left: normalize(20),
    zIndex: 1,
  },
  topRightContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
    right: normalize(20),
    zIndex: 1,
  },
  topLeftLogo: {
    width: normalize(60),
    height: normalize(80),
    padding: normalize(50),
  },
  topRightLogo: {
    width: normalize(50),
    height: normalize(200),
    padding: normalize(30),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.25,
    maxWidth: 300,
    maxHeight: 200,
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(32),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: normalize(10),
    marginTop: normalize(10),
  },
  subText: {
    fontSize: 16,
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: normalize(50),
    lineHeight: normalize(42),
  },
  button: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(30),
    alignItems: 'center',
    width: '90%',
    height: normalize(50),
    borderWidth: 3,
    borderColor: '#D8D5EA',
    borderRadius: 50,
    maxWidth: 500,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  beta: {
    alignSelf: 'flex-end',
    marginRight: 40,
    color: COLORS.white,
    fontFamily: 'Poppins-Bold',
  },
});

export default IntroScreen;
