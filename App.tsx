import FontAwesome from '@expo/vector-icons/FontAwesome';
import NameDisplay from 'components/NameDisplay';
import arrayOfNames from 'constants/names';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import getRandomNumber from 'utils/getRandomNumber';
import './global.css';

export default function App() {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const opacity = useSharedValue(1);
  const rotation = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  const updateNumber = () => {
    const randNum = getRandomNumber(0, 98);
    setRandomNumber(randNum);
  };

  useEffect(() => {
    updateNumber();
  }, []);

  const getRandom = () => {
    opacity.value = withSequence(
      withTiming(0, { duration: 400 }),
      withTiming(0, { duration: 0 }, () => {
        runOnJS(updateNumber)();
      }),
      withTiming(1, { duration: 400 })
    );
    rotation.value = withTiming(rotation.value + 180, {
      duration: 400,
      easing: Easing.linear,
    });
  };

  const exclamationPress = () => {
    console.log(`pressed`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black ">
      <View className="flex-1 p-4">
        <View className="h-1/4 w-full" />
        <Animated.View style={[animatedStyle]}>
          <View className="h-1/2 w-full">
            <NameDisplay nameArray={arrayOfNames[randomNumber]} />
          </View>
        </Animated.View>
        <TouchableOpacity
          onPress={getRandom}
          className="mx-auto max-w-48 flex-row rounded-md border border-black bg-white p-4 text-black dark:bg-white dark:text-white">
          <Text className="mr-4 text-center ">Refresh</Text>
          <Animated.View style={[iconAnimatedStyle]}>
            <FontAwesome name="refresh" size={24} color="black" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={exclamationPress} className="absolute bottom-8 right-8">
          <FontAwesome name="exclamation-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar hidden />
    </SafeAreaView>
  );
}
