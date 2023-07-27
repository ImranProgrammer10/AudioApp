import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

const THEME={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background:'white'
    }
}

export default function navigation(){
    <NavigationContainer theme={THEME}>
        
    </NavigationContainer>
}