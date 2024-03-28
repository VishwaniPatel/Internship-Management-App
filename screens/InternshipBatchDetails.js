import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InternshipBatchDetails = ({route}) => {
  const batchId = route.params.batchId;
  console.log(batchId);
  return (
    <View>
      <Text>InternshipBatchDetails</Text>
    </View>
  );
};

export default InternshipBatchDetails;

const styles = StyleSheet.create({});
