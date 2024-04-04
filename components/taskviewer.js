import { View, Text } from 'react-native';
import ClassViewer from './classviewer';
export default function TaskViewer({ scheduleObject }) {
	const dayOfWeek = new Date().getDay();
	const dayOfWeekString = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const today = dayOfWeekString[dayOfWeek];
	return (
		<View className=''>
			<Text>
				{Object.keys(scheduleObject).map((day, index) => {
					dayClasses = scheduleObject[day];
					if (day != today) {
						return;
					}
					
					return (
						<View>
							<ClassViewer
							key={index}
							daysClasses={dayClasses}
						/>
						<Text>
							WTF IS GOING ON MY NIGGA
						</Text>
						</View>
						
					);
				})}
			</Text>
		</View>
	);
}
