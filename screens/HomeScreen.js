import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
const ios = performance.OS == 'ios';
const HomeScreen = () => {
  return (
    <View className=" flex-1 bg-neutral-800 ">
        {/* search bar and logo */}
      <SafeAreaView className={ios?"-mb-3":"mb-4 mt-2"}>
          <StatusBar style='light'/>
          <View className="flex-row justify-between item-center mx-4">
            <Bars3CenterLeftIcon size={35} strokeWidth={2} color="white"/>
            <Text className='text-2xl text-red-300'>Movies</Text>
            <MagnifyingGlassIcon size={30} color='white'/>
          </View>
      </SafeAreaView>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom:10}}>
           {/* trending movies carosoul */}
           
      </ScrollView>
    </View>
  )
}

export default HomeScreen