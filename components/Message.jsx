import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}!</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Email: <Text style={styles.infoText}>{user.email}</Text></Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Full Name: <Text style={styles.infoText}>{user.fullName}</Text></Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Address: <Text style={styles.infoText}>{user.address}</Text></Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Birthdate: <Text style={styles.infoText}>{user.dob}</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#E6E6FA',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 28,
    color: '#4B0082',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: '#4B0082',
    marginLeft: 10,
  },
  infoText: {
    fontWeight: '600',
    color: 'black'
  }
})

export default Message
