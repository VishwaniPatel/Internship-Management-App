import React from 'react';
import {FlatList} from 'react-native';
import InternshipBatchCard from './InternshipBatchCard';
import {InternshipBatchData} from '../data/InternsData';
const InternshipBatchList = ({navigation}) => {
  function renderBatchList(batch) {
    const formatDateString = dateString => {
      const options = {year: 'numeric', month: 'short', day: 'numeric'};
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
    };
    function pressHandler() {
      navigation.navigate('InternBatchDetails', {
        batchId: batch.item.id,
      });
    }
    return (
      <InternshipBatchCard
        batchName={batch.item.batchname}
        startdate={formatDateString(batch.item.startdate)}
        enddate={formatDateString(batch.item.enddate)}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={InternshipBatchData}
      renderItem={renderBatchList}
      keyExtractor={item => item.id}
    />
  );
};

export default InternshipBatchList;
