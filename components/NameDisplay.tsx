import React from 'react';
import { Text, View } from 'react-native';
interface Props {
  nameArray: [number, string, string, string];
}

export default function NameDisplay({ nameArray }: Props) {
  const [nameNumber, arabicName, englishName, meaning] = nameArray;

  return (
    <View className="flex-col items-center justify-center gap-8">
      <View className="flex-col items-center justify-center gap-2">
        <Text className="text-6xl font-medium text-black dark:text-white">{arabicName}</Text>
        <Text className="text-3xl font-normal text-black dark:text-white">{englishName}</Text>
      </View>
      <View className="h-[2px] w-1/3 bg-yellow-200 dark:bg-yellow-600" />
      <Text className="text-center text-2xl text-black dark:text-white">{meaning}</Text>
    </View>
  );
}
