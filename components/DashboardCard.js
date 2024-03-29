import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DashboardCard = ({title, onPress}) => {
  return (
    <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 8,
    padding: 20,
    margin: 10,
    // height: 80,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    color: 'black',
  },
});
