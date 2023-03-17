import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SkillRating = ({ level }) => {
  // Calcula quantas estrelas devem ser preenchidas com base na proporção 2:1
  const filledStars = Math.floor(level / 2);
  const halfStars = level % 2 === 1;
  const emptyStars = 5 - filledStars - halfStars;

  const filledStarIcon = <Icon name="star" color="gold" size={20} />;
  const emptyStarIcon = <Icon name="star-o" color="gold" size={20} />;
  const halfStarIcon = <Icon name="star-half-empty" color="gold" size={20} />;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <View key={index}>{filledStarIcon}</View>
      ))}
      {halfStars && <View>{halfStarIcon}</View>}
      {[...Array(emptyStars)].map((_, index) => (
        <View key={index}>{emptyStarIcon}</View>
      ))}
      <Text style={{ marginLeft: 5, color: "#FFFF"}}>{level}</Text>
    </View>
  );
};

export default SkillRating;