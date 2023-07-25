import { Button, StyleSheet, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
    },
    logo: {
      width: 86,
      height: 78,
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
    },
  });

export default function CardPokemon({id, name, navigation}) {
  return (
    <View>
        <Text style={styles.name}>
            {name}
        </Text>
        <Text>{id}</Text>
        <Image style={styles.logo} source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}/>
        <Button style={styles.button} title='Details' onPress={()=> navigation.navigate("PokemonDetails") }/>
    </View>
  )
}
