import {StyleSheet} from 'react-native';
import React from 'react';
import InternshipBatchList from '../components/InternshipBatchList';

const InternsBatch = ({navigation}) => {
  return (
    <>
      <InternshipBatchList navigation={navigation} />
    </>
  );
};

export default InternsBatch;

const styles = StyleSheet.create({});
