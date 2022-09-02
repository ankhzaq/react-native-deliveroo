import { View, Text, TextInput, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute
} from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';


const RestaurantScreen = () => {

  const {
    params: {
      image,
      name
    }
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <ScrollView>
      <View className="relative">
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{
            uri: urlFor(image).url(),
          }}
        />
        <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB"  />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default RestaurantScreen;
