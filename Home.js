import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CardPokemon from './CardPokemon';

const pokemonList = [
	{
		name: 'Furret',
		id: '162'
	},
	{
		name: 'Lucario',
		id: '448'
	},
	{
		name: 'Gengar',
		id: '94'
	},
	{
		name: 'Jigglipuff',
		id: '39'
	},
]

export default function Home({ navigation }) {

  return (
    <View style={styles.card}>
        {pokemonList.map((pokemon)=> { 
            return <CardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} navigation={navigation} />
         })}
      
    </View>
  );
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		shadowColor: '#000',
		shadowOpacity: 0.3, // Aumentamos la opacidad para un relieve más pronunciado
		shadowOffset: { width: 0, height: 4 }, // Aumentamos el desplazamiento vertical para un efecto de elevación más pronunciado
		shadowRadius: 8, // Aumentamos el radio de la sombra para una sombra más difusa
		elevation: 4,
	  },
});