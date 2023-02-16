import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  Platform,
  ActivityIndicator
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  console.log(Platform.OS);
  return (
    <View>
      <ScrollView>
        {/*-------------------------------------------------- */}
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
        {/*----------------------------------------------------- */}
        <View style={styles.container}>
          <TextInput
            style={{ width: 100, borderWidth: 2, borderColor: 'blue' }}
          >
            enter text
          </TextInput>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        {/*---------------------------------------------------- */}
        {Platform.OS ? <Text>android</Text> : <Text>iods</Text>}
        <View style={{ backgroundColor: 'blue' }}>
          <View>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'powderblue'
              }}
            />

            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'skyblue'
              }}
            />
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'steelblue'
              }}
            />
          </View>
        </View>
        {/*---------------------------------------------------- */}
        <View style={styles.container2}>
          <ActivityIndicator size="large" color="#00ff00" />
          <ActivityIndicator />
          <ActivityIndicator size="large" color="black" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
