import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput,Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
const [text, setText] = useState("");

const [x, setX] = useState("");

function f(){
setX(text.split('').reverse().join(''));
}
return (
<View style={styles.container}>
<Text>Введите какое-нибудь значение:</Text>
<TextInput onChangeText={setText}
style={{borderWidth: 2,
fontSize: 22
}}/>
<Button title="Получить результат" onPress={f}/>
<Text style={styles.paragraph}>Результат:</Text>
<Text style={styles.paragraph}>{x}</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#B0C4DE',
padding: 8,
},
paragraph: {
fontSize: 18,
fontWeight: 'bold',
},
});