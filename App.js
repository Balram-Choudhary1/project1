
// import React from 'react'
// import Appnavigation from './navigation/appnavigation'
// const App = () => {
//   return (
//       <Appnavigation/>
//   )
// }

// export default App
import { View, Text, Switch,StatusBar } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const App = () => {
  const {colorScheme,toggleColorScheme} = useColorScheme()
  return (
    <View className='flex-1 justify-center items-center dark:bg-neutral-900'>
      <StatusBar barStyle={colorScheme=='dark'?'light':'dark'}/>
      <View className='flex-row justify-center items-center space-x-2'>
        <Text className='text-xl dark:text-white'>Toggle Button</Text>
        
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}/>
      </View>
      <View className='h-48 w-96 mt-10 bg-lime-200 dark:bg-red-400'>
        <Text className='text-center'>Hello Jee</Text>
      </View>
    </View>
  )
}

export default App