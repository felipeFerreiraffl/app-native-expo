import Home from './src/pages/Home/index';
import { useFonts } from './node_modules/expo-font/build/FontHooks';
import * as SplashScreen from 'expo-splash-screen';
import { fonts } from './src/fonts/fonts';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.regularFont]: require('./src/fonts/static/HostGrotesk-Light.ttf'),
    [fonts.boldFont]: require('./src/fonts/static/HostGrotesk-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Home />
  );
}