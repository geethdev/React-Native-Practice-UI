import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { commonStyles } from '../utilities/theme';

const initialRoutines = [
  { id: 1, time: '6:45 am', activity: 'Take 3 slow breaths', completed: true },
  { id: 2, time: '7:00 am', activity: 'Drink more water', completed: true },
  { id: 3, time: '7:30 am', activity: 'Go for a walk', completed: true },
  { id: 4, time: '8:00 am', activity: 'Message a friend', completed: true },
  { id: 5, time: '9:00 am', activity: 'Meditate', completed: true },
];

const MyRoutineSection = () => {
  const [routines, setRoutines] = useState(initialRoutines);

  const toggleComplete = id => {
    setRoutines(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  //stack navigation ,drawer, multiple languages, daram
  const handleAddActivity = () => {
    alert('Add new activity');
  };

  return (
    <View style={commonStyles.routineSection}>
      <View style={commonStyles.routineHeader}>
        <Text style={commonStyles.sectionTitle}>My Routine</Text>
        <View style={commonStyles.routineHeaderIcons}>
          <TouchableOpacity style={commonStyles.routineIconButton}>
            <MaterialCommunityIcons
              name="calendar-blank"
              size={22}
              color="#666"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={commonStyles.routineIconButton}
            onPress={handleAddActivity}
          >
            <MaterialCommunityIcons name="plus" size={22} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {routines.map(item => (
        <TouchableOpacity
          key={item.id}
          style={commonStyles.routineItem}
          onPress={() => toggleComplete(item.id)}
          activeOpacity={0.7}
        >
          <View style={commonStyles.routineContent}>
            <View>
              <Text style={commonStyles.routineTime}>{item.time}</Text>
              <Text style={commonStyles.routineActivity}>{item.activity}</Text>
            </View>
            <MaterialCommunityIcons
              name={item.completed ? 'check' : 'check-outline'}
              size={24}
              color={item.completed ? '#4CAF50' : '#CCCCCC'}
            />
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={commonStyles.addActivityButton}
        onPress={handleAddActivity}
        activeOpacity={0.7}
      >
        <View style={commonStyles.addActivityContent}>
          <MaterialCommunityIcons name="plus" size={20} color="#00BCD4" />
          <Text style={commonStyles.addActivityText}>Add an activity</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyRoutineSection;
