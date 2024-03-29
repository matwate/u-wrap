import { View, Text } from 'react-native';

export default function ClassViewer({ daysClasses }) {
	currentHour = new Date().getHours();

	return (
		<View>
			{Object.keys(daysClasses).map((day, index) => {
                const dayClass = daysClasses[day]
				
				if (
					currentHour - 1  < dayClass.HoraInicio ||
					currentHour > dayClass.HoraFin
				) {
					return;
				} else {
					return (
						<View
							key={index}
							className='items-center'>
							<Text>{dayClass.Nombre}</Text>
                            <Text>{dayClass.HoraInicio} - {dayClass.HoraFin}</Text>
                            <Text>{dayClass.Salon}</Text>
						</View>
					);
				}
			})}
		</View>
	);
}
