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
						<View
							key={index}
							className='bg-zinc-500 p-4 m-4 rounded-lg'>
							<ClassViewer daysClasses={dayClasses} />
						</View>
					);
				})}
			</Text>
		</View>
	);
}
