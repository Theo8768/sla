import { Text, View, StyleSheet } from "react-native";

import Button from '@/componentes/Button';
import ImageViewer from "@/componentes/ImageViewer";

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/guts.jpeg');

export default function Index() {

    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('voce nao selecionou a imagem.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Aqui você verá um pouco sobre a obra Berserk vá em sobre para ver mais
        {"\n\n"}
      </Text>
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      <Button theme='primary' label="Escolha a foto" onPress={pickImageAsync}/>
      <Button label="Use a foto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: "center",
  },

  text: {
    color: '#fff'
  },


  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

});