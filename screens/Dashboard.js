import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DashboardCard from '../components/DashboardCard';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const navigation = useNavigation();
  const DATA = [
    {id: '1', title: 'InterBatch', path: 'InternsBatch'},
    {id: '2', title: 'Mentors', path: 'mentors'},
    {id: '3', title: 'Roadmap'},
    {id: '4', title: 'Training Tracker'},
  ];
  function pressHandler(path) {
    navigation.navigate(path);
  }
  const renderItem = ({item}) => (
    <DashboardCard title={item.title} onPress={() => pressHandler(item.path)} />
  );

  useEffect(() => {
    // Function to update timeOfDay state based on current time
    const updateTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('Good Morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setTimeOfDay('Good Afternoon');
      } else {
        setTimeOfDay('Good Evening');
      }
    };

    // Call updateTimeOfDay initially
    updateTimeOfDay();

    // Update timeOfDay every minute
    const interval = setInterval(updateTimeOfDay, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{height: '100%'}}>
      <Text style={{fontSize: 20}}>Hello, {timeOfDay}</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.container}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexShrink: 0,
    // flexDirection: 'column',
    // padding: 16,
    // height: 500,
  },
});
