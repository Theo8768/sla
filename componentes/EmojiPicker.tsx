import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { ReactNode } from 'react';  // Mudamos esta importação
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {  // Nome do tipo corrigido para Props
    isVisible: boolean;
    onClose: () => void;
    children?: ReactNode;  // Adicionamos children ao tipo
};

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
});