import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import Button from '@/componentes/Button';
import ImageViewer from "@/componentes/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import iconButtons from "@/componentes/iconButtons";
import CircleButton from "@/componentes/CircleButton";
import EmojiPicker from "@/componentes/EmojiPicker";
import IconButtons from "@/componentes/iconButtons";
import EmojiList from "@/componentes/EmojiList";
import Emojisticker from "@/componentes/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PlaceholderImage = require('@/assets/images/guts.jpeg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalViseble] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Corrigido também!
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou a imagem.');
    }
  };

  const onAddSticker = () => {
    setIsModalViseble(true);
  }

  const onModalClose= () => {
    setIsModalViseble(false);
  }
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSaveImageAsync = async () => {
   
  };

  return (
 
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.text}>
        Aqui você verá um pouco sobre a obra Berserk. Vá em "Sobre" para ver mais.
        {"\n\n"}
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji  &&  <Emojisticker imageSize={40} stickerSource={pickedEmoji} />} 
       {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButtons icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButtons icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : ( 
          <View style={styles.footerContainer}>
            <Button theme='primary' label="Escolha a foto" onPress={pickImageAsync} />
            <Button label="Use a foto" onPress={() => setShowAppOptions(true)} />
          </View>
      )}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onClickModal={onModalClose} />
          </EmojiPicker>
      </View>
    </GestureHandlerRootView>
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
   optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});