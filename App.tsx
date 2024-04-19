import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicList from './Screen/MusicList';
import MusicPlayer from './Screen/MusicPlayer';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Musiclist"
          component={MusicList}
          options={{title: 'Music', headerTintColor:"green"}}
        />
        <Stack.Screen name="Musicplayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;