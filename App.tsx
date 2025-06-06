// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import StackNavigator from './src/navigation/StackNavigator';
// import {StatusBar} from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="#ffffff"
//         translucent={false}
//       />
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;
// App.jsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
