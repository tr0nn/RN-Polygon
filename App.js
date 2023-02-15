import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{count}</Text>
      <Button
        title="Increment + 1"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title="Decrement - 1"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
