import { useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text, Button, Alert, KeyboardAvoidingView } from 'react-native';

import Input from './components/Input';
import Message from './components/Message';

export default function App() {
  const [valid, setValid] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDob] = useState('')

  const [user, setUser] = useState(null)

  const register = () => {
    setValid(false)

    if (!name.trim()) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    if (!username.trim()) {
      Alert.alert('Validation Error', 'Username is required.');
      return;
    }

    if (password.length < 4) {
      Alert.alert('Validation Error', 'Password must be at least 4 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    if (!address.trim()) {
      Alert.alert('Validation Error', 'Address is required.');
      return;
    }

    if (!dob.trim()) {
      Alert.alert('Validation Error', 'Date of Birth is required.');
      return;
    }

    setUser({
      fullName: name,
      email: email,
      username: username,
      address: address,
      dob: dob
    })
    setValid(true)
  }

  return (
    <KeyboardAvoidingView behavior='height' enabled style={styles.container}>
      <ScrollView
        centerContent={true}
        automaticallyAdjustKeyboardInsets={true}
        style={styles.scrollview}
        contentContainerStyle={styles.innerContainer}
      >
        {!valid && (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'violet' }}>Registration Form</Text>

            <Input
              value={name}
              setValue={setName}
              placeholder={'Please enter your name'}
            />

            <Input
              value={email}
              setValue={setEmail}
              placeholder={'Please enter your email'}
              keyboardType='email-address'
            />

            <Input
              value={username}
              setValue={setUserName}
              placeholder={'Please enter your username'}
            />

            <Input
              value={password}
              setValue={setPassword}
              placeholder={'Please enter your password'}
              password={true}
            />

            <Input
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder={'Please confirm your password'}
              password={true}
            />

            <Input
              value={address}
              setValue={setAddress}
              placeholder={'Please enter your address'}
            />

            <Input
              value={dob}
              setValue={setDob}
              placeholder={'Please enter your date of birth (YYYY-MM-DD)'}
            />

            <Button
              title='Register'
              onPress={register}
              disabled={valid}
            />
          </View>

        )}

        {valid && (
          <Message user={user} />
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8c0',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  scrollview: {
    flex: 1,
    width: '100%'
  },
  scrollViewContent: {
    padding: 16,
    alignItems: 'center'
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
})