import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const InternshipBatchCard = ({batchName, startdate, enddate, onPress}) => {
  return (
    <View style={styles.card}>
      <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.batchName}>{batchName}</Text>
          <Text>Start Date: {startdate}</Text>
          <Text>End Date: {enddate}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerContainer: {
    padding: 16,
  },
  batchName: {
    color: '#005ba9',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default InternshipBatchCard;
