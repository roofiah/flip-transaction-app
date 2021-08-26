import React, {Component} from 'react';
import { StatusBar, View,Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';

import { Colors } from './src/styles/Colors';
import AppNavigation from './src/navigation/AppNavigation';

class App extends Component {

    render() {
      console.log('halaman app');
        return (
            <StoreProvider store={store}>
              <PaperProvider>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <AppNavigation/>
              </PaperProvider>
          </StoreProvider>  
        );
    }
}

export default App
