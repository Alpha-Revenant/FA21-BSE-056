import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountedPrice = price - (price * discount) / 100;
      setFinalPrice(discountedPrice.toFixed(2));
    } else {
      setFinalPrice('Invalid Input');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />
      <Button title="Calculate Discount" onPress={calculateDiscount} />
      <Text style={styles.result}>Final Price: ${finalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DiscountCalculatorApp;