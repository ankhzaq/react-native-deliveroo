import { View, Text, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { } from 'react';
import { useRoute } from '@react-navigation/native';


const RestaurantScreen = () => {

  const {
    params: {
      name
    }
  } = useRoute();

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default RestaurantScreen;
