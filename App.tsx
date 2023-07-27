import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from 'react';
import Text from './components/text/text';


export default function App() {


  return (
    <SafeAreaProvider>
      <Text preset="h1">Basa theke ber hobo 11 tai .
       Jahangir vi  tumi valo hoye jaw</Text>
    </SafeAreaProvider>
  );
 

}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontFamily:'Manrope-Bold',
  },
});