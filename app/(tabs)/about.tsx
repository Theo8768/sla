import { Text, View, StyleSheet } from 'react-native';


export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>      
      O bagulho é pesado mesmo. Berserk é uma obra escrita e ilustrada pelo Kentaro Miura, e tem o Guts como protagonista.
      O cara é um verdadeiro monstro, literalmente! Ele é um guerreiro com uma espada gigantesca, um cara que não conhece
      paz desde que nasceu. O Guts vive em um mundo sombrio, repleto de demônios, monstros e gente escrota. Sua vida é 
      um inferno, e ele carrega uma raiva e uma vingança dentro de si que não tem fim.
      A parada toda gira em torno da busca do Guts por vingança contra o Griffith, um ex-amigo que virou um baita vilão.
      O mangá é cheio de cenas brutais, bem sangrentas, com um clima pesadíssimo e com muita reflexão sobre o destino,
      a dor e a luta pelo que acredita, mesmo quando o mundo tá desmoronando. É uma obra de peso, e por isso é cultuada 
      até hoje, mesmo com a morte do Miura, o criador.  
      É tenso, cheio de sofrimento, mas a história é envolvente demais. Quem curte uma trama mais sombria e com
      personagens profundos, Berserk é leitura obrigatória!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  box:{
    width:350,
    height:350,
    justifyContent: 'center',
    alignItems: 'center',
    margin :20,
  },
  },

);