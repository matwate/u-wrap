import { View, Text } from 'react-native';

export default function ClassViewer({ daysClasses }) {
	currentHour = new Date().getHours();

	return (
		<View>
			{Object.keys(daysClasses).map((day, index) => {
				const dayClass = daysClasses[day];

				if (
					currentHour - 1 < dayClass.HoraInicio ||
					currentHour > dayClass.HoraFin
				) {
					return;
				} else {
					return (
						<View
							key={index}
							className='w-[348px] h-[187px] left-[24px] top-[79px] absolute'>
							<Text className="left-[12px] top-[5px] absolute text-white text-2xl font-normal font-['Bricolage Grotesque']">
								{dayClass.Materia}
							</Text>
						</View>
					);
				}
			})}
		</View>
	);
}
