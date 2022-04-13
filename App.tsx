import { StyleSheet, Text, View } from 'react-native';
import Button from './Button/Button';

export default function App() {

  function handlePress(){
    console.log("Apertou");
  }

  return (
    <View style={styles.container}>
      <Button
        variant='primary'
        iconName='book'
        title="Login"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },

});
