import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {batchIntern} from '../data/InternsData';
import {Table, Row, Rows} from 'react-native-table-component';

const InternshipBatchDetails = ({route}) => {
  const [internList, setInternList] = useState([]);
  const batchId = route.params.batchId;

  const getInternList = () => {
    if (batchId) {
      setInternList(batchIntern.filter(record => record.batchId == batchId));
    }
  };

  useEffect(() => {
    getInternList();
  }, [batchId, batchIntern]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#dee2e6'}}>
        <Row
          data={['Name', 'Email', 'Domain']}
          style={styles.head}
          textStyle={styles.headText}
        />
        {internList.length > 0 ? (
          <Rows
            data={internList.map(intern => [
              intern.firstName,
              intern.email,
              intern.domain,
            ])}
            textStyle={styles.text}></Rows>
        ) : (
          <Rows>No record found</Rows>
        )}
      </Table>
    </View>
  );
};

export default InternshipBatchDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  head: {height: 32, backgroundColor: '#f1f3f5'},
  headText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    // color: 'white',
  },
  text: {margin: 6, fontSize: 12, fontWeight: '400', textAlign: 'center'},
});
