import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const flightInfoHeight = 0.3 * screenHeight;
const rest = screenHeight - flightInfoHeight;

export { screenHeight, flightInfoHeight, rest };
