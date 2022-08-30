import { Image, View, Text, TouchableOpacity } from 'react-native';
import { urlFor } from "../sanity";

import React from 'react';

const CategoryCard = ({ image, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: image && urlFor(image).url()
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity> );
};

export default CategoryCard;
