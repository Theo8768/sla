import { ImageSourcePropType, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

export default function Emojisticker({ imageSize, stickerSource }: Props) {
    return (
        <View style={{ top: -350 }}>
            <Image 
                source={stickerSource} 
                style={{ width: imageSize, height: imageSize }} 
            />
        </View>
    );
}