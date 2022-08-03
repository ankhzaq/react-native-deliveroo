import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard'

import React from 'react';

const Categories = ( props ) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="title 1" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="title 2" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="title 3" />
    </ScrollView> );
};

export default Categories;
