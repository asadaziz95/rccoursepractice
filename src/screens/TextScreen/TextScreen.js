import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  //   const [errorState,setErrorState] = useState(false);
  return (
    <View>
      <Text>Type Your Name</Text>
      <TextInput
        style={styles.inputtext}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => {
          setName(newValue);
        }}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputtext}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newValue => {
          setPassword(newValue);
          //   if(newValue.length >5){
          //     setErrorState(false);
          //     setPassword(newValue);
          //   }
          //   else{
          //     setErrorState(true);
          //   }
        }}
      />
      <Text>Hi {name}</Text>
      {password.length < 4 ? (
        <Text style={styles.errState}>
          Password must be longer then 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputtext: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  errState: {
    color: 'red',
    fontWeight: 'bold',
  },
});
export default TextScreen;
