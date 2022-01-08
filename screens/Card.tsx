import {Dimensions, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>This is a card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH - 30,
    height: SCREEN_HEIGHT * 0.2,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default Card;
