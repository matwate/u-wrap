import React, { useEffect, useState } from 'react';
import { Button, Text, View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import TaskViewer from './components/taskviewer';
import ClassViewer from './components/classviewer';
export default function App() {
	const [scheduleObject, setScheduleObject] = useState({});

	useEffect(() => {}, []);

	const storeData = async () => {
		try {
			const document = await DocumentPicker.getDocumentAsync();
			if (document.canceled) {
				return;
			} else {
				try {
					const uri = document.assets[0].uri;
					const file = await FileSystem.readAsStringAsync(uri);
					ToastAndroid.show(file, ToastAndroid.SHORT);
					try {
						await AsyncStorage.setItem('data', file);
					} catch (e) {}
				} catch (e) {}
			}
		} catch (e) {}
	};

	const retrieveData = async () => {
		try {
			const data = await AsyncStorage.getItem('data');
			ToastAndroid.show('Loaded Successfully', ToastAndroid.SHORT);

			if (data !== null) {
				const value = JSON.parse(data);
				setScheduleObject(value);
			}
		} catch (e) {}
	};

	return (
		<View className='w-screen h-screen flex flex-col align-center justify-center'>
			<View className='w-full h-full relative bg-neutral-800  border-2 '>
				<View className='w-[151px] h-12 left-[36px] top-[36px] absolute'>
					<Text className="text-blue-700 text-2xl font-bold font-['Bricolage Grotesque']">
						U
						<Text className="text-white text-2xl font-bold font-['Bricolage Grotesque']">
							-Wrap
						</Text>
					</Text>
				</View>
				<View className='w-[354px] h-[47px] left-[18px] top-[30px] absolute'>
					<View
						className='w-[30px] h-[30px] left-[312px] top-[6px] absolute bg-blue-400 rounded-[34px]'
						
					/>

					<View
						className='w-[30px] h-[30px] left-[261px] top-[6px] absolute bg-blue-400 rounded-[34px]'

						
					/>
					<Text className="left-[320px] top-[5px] absolute text-white text-lg font-bold font-['Bricolage Grotesque']" onPress={storeData}>
						S
					</Text>
					<Text className="left-[269px] top-[5px] absolute text-white text-lg font-bold font-['Bricolage Grotesque']" onPress={retrieveData}>
						L
					</Text>
					<TaskViewer scheduleObject={scheduleObject} />
				</View>
			</View>
		</View>
	);
}
