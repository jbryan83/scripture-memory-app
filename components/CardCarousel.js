import React from 'react';
import { useColorScheme, useWindowDimensions } from 'react-native';
import styled from 'styled-components';
import Card from './Card';
import { VERSES } from '../data/verses';

const CardCarousel = ({ verse }) => {
  const window = useWindowDimensions();
  const theme = useColorScheme();
  const darkMode = theme === 'dark';
  const verses = VERSES;

  return (
    <CardCarouselView
      horizontal
      snapToAlignment='center'
      snapToInterval={window.width}
      decelerationRate={'fast'}
      darkMode={darkMode}
      onContentSizeChange={(contentWidth, contentHeight) => {
        // console.log(contentWidth, contentHeight);
      }}
    >
      <Card verse={verses[0]} />
      <Card verse={verses[1]} />
      <Card verse={verses[2]} />
      <Card verse={verses[3]} />
    </CardCarouselView>
  );
};

const CardCarouselView = styled.ScrollView`
  background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#f5fcff')};
`;

export default CardCarousel;
