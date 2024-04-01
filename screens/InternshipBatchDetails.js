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
      <Table borderStyle={{borderWidth: 4, borderColor: 'teal'}}>
        <Row
          data={['Name', 'Email', 'Domain']}
          style={styles.head}
          textStyle={styles.headText}
        />
        {internList.length > 0 ? (
          internList.map(intern => (
            // console.log(intern),
            <Rows data={[intern.firstName, intern.email, intern.domain]}></Rows>
          ))
        ) : (
          // <Rows
          //   data={[
          //     internList.map(intern => intern.firstName),
          //     internList.map(intern => intern.email),
          //     internList.map(intern => intern.domain),
          //   ]}
          //   textStyle={styles.text}
          // />
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
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  head: {height: 44, backgroundColor: 'darkblue'},
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'center'},
});
