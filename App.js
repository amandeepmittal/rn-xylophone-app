import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
	NoteOne,
	NoteTwo,
	NoteThree,
	NoteFour,
	NoteFive,
	NoteSix,
	NoteSeven
} from './constants/Colors'

const xyloSounds = {
	one: require('./assets/sounds/note1.wav'),
	two: require('./assets/sounds/note2.wav'),
	three: require('./assets/sounds/note3.wav'),
	four: require('./assets/sounds/note4.wav'),
	five: require('./assets/sounds/note5.wav'),
	six: require('./assets/sounds/note6.wav'),
	seven: require('./assets/sounds/note7.wav')
}

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
