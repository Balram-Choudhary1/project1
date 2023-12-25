
// import React from 'react'
// import Appnavigation from './navigation/appnavigation'
// const App = () => {
//   return (
//       <Appnavigation/>
//   )
// }

// export default App


// //Dark theme
// import { View, Text, Switch,StatusBar } from 'react-native'
// import React from 'react'
// import { useColorScheme } from 'nativewind'

// const App = () => {
//   const {colorScheme,toggleColorScheme} = useColorScheme()
//   return (
//     <View className='flex-1 justify-center items-center dark:bg-neutral-900'>
//       <StatusBar barStyle={colorScheme=='dark'?'light':'dark'}/>
//       <View className='flex-row justify-center items-center space-x-2'>
//         <Text className='text-xl dark:text-white'>Dark theme</Text>
        
//         <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}/>
//       </View>
//       <View className='h-48 w-96 mt-10 bg-lime-200 dark:bg-red-400'>
//         <Text className='text-center'>Hello Jee</Text>
//       </View>
//     </View>
//   )
// }

// export default App


// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// Define the component
const MonthDropdown = () => {
  // State to store the selected month
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Array of 12 months
  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  // Function to handle the submission of the selected value
  const handleSubmit = () => {
    if (selectedMonth) {
      // Handle the selected month, you can perform any action here
      console.log('Selected Month:', selectedMonth);
    } else {
      // No month selected
      console.log('Please select a month');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Dropdown component */}
      <RNPickerSelect
        placeholder={{ label: 'Select a month', value: null }}
        items={months}
        onValueChange={(value) => setSelectedMonth(value)}
        value={selectedMonth}
      />

      {/* Select button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Select</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MonthDropdown;
