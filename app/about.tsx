import Feather from '@expo/vector-icons/Feather';
import { ExternalLink } from 'components/ExternalLink';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.textItem}>
          <Text className="text-center text-2xl font-semibold text-black dark:text-white">
            About
          </Text>
          <Text className="text-start text-xl font-normal text-black dark:text-white">
            This simple application is designed to help you learn and reflect upon the 99 beautiful
            names of Allah (Al Asma ul-Husna). Each name reveals a unique attribute of God, inviting
            contemplation and a deeper connection.
          </Text>
        </View>
        <View style={styles.textItem}>
          <Text className="text-center text-2xl font-semibold text-black dark:text-white">
            Our Intention
          </Text>
          <Text className="text-start text-xl font-normal text-black dark:text-white">
            This app is created with the sincere intention of being a tool for remembrance and
            education. We hope it serves as a beneficial resource for all users seeking to
            understand the divine names.
          </Text>
        </View>
        <View style={styles.textItem}>
          <Text className="text-center text-2xl font-semibold text-black dark:text-white">
            Data Source
          </Text>
          <Text className="text-start text-xl font-normal text-black dark:text-white">
            The names of Allah presented in this app are based on widely recognized and respected
            Islamic scholarship. These names are primarily derived from the Holy Quran and the
            Sunnah (teachings and practices) of Prophet Muhammad (peace be upon him).
          </Text>
          <Text className="mt-4 text-start text-xl font-normal text-black dark:text-white">
            Content for this application has been sourced from the websites listed below. For
            further exploration of the names, please refer to the provided links.
          </Text>
          <View className="mb-12 mt-4 flex-col items-start justify-center gap-y-3">
            <View>
              <ExternalLink url="https://99namesofallah.name/">99namesofAllah.name</ExternalLink>
              <View className="flex-row items-center justify-center">
                <Feather
                  name="corner-down-right"
                  size={24}
                  color={colorScheme === 'light' ? 'black' : 'white'}
                />
                <Text className="text-black  dark:text-white">
                  Source for Names and Their Brief Transliterations
                </Text>
              </View>
            </View>
            <View>
              <ExternalLink url="https://myislam.org/99-names-of-allah/">myislam.org</ExternalLink>
              <View className="flex-row items-center justify-center">
                <Feather
                  name="corner-down-right"
                  size={24}
                  color={colorScheme === 'light' ? 'black' : 'white'}
                />
                <Text className="text-black dark:text-white">More information on the names</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    rowGap: 20,
    width: '85%',
    marginHorizontal: 'auto',
    paddingVertical: 20,
  },
  textItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    rowGap: 5,
  },
});
