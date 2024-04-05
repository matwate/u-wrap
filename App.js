import React, { useEffect, useState } from 'react';
import { Button, Text, View, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { WebView } from 'react-native-webview';
export default function App() {
	

	return (
		
			<WebView
				source={{ uri: 'https://uwrap.vercel.app/' }}
				
			/>
		
	);
}

