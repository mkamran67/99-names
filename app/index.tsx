import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

export default function Index(props: Props) {
	return (
		<SafeAreaView>
			<View>
				<Text>Potato</Text>
			</View>
		</SafeAreaView>
	);
}
