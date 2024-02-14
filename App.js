import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }} >Ethio Language Box </Text>
      <Text>Welcome to Expo App </Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias harum quibusdam nobis saepe vel voluptatem fugiat et ea architecto. Nihil similique inventore rem quas dignissimos cupiditate possimus saepe culpa?</Text>
      <StatusBar style="auto" />
      <Button title='Register' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
