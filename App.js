import React, { useEffect, useState } from 'react';
import { Button, Text, View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import TaskViewer from './components/taskviewer';
export default function App() {
	const [scheduleObject, setScheduleObject] = useState({});

	useEffect(() => {
		
		retrieveData();
	}, []);

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
						
					} catch (e) {
						
					}
				} catch (e) {
					
				}
			}
		} catch (e) {
			
		}
		
	};

	const retrieveData = async () => {
		
		try {
			const data = await AsyncStorage.getItem('data');

			if (data !== null) {
				const value = JSON.parse(data);
				setScheduleObject(value);
			}
		} catch (e) {
			
		}
		
		
	};

	return (
		<View className='bg-zinc-700 h-screen  '>
			<View className=''>
				<Text className='text-white text-center m-8 text-lg'>
					Matwa's Uni Classes
				</Text>

				<View className='flex flex-col p-4'>
					<View>
						<Button
							title='Load Data'
							onPress={storeData}
						/>
						<Button
							title='Retrieve Data'
							onPress={retrieveData}
						/>
					</View>
					<View className=''>
						<TaskViewer scheduleObject={scheduleObject} />
					</View>
				</View>
			</View>
		</View>
	);
}
