import { Image, View, Text, TouchableOpacity } from 'react-native';

import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgUrl
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity> );
};

export default CategoryCard;
