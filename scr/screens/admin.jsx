import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const ChatAdmin = () => {

    const handleOpenWhatsApp = () => {
        let phoneNumber = '628175030077'; 
        let movieQuestion = 'Silakan pilih film yang ingin Anda tonton:'; 
        let defaultMovie = 'Avengers: Endgame';

        let message = `Halo, saya ingin bertanya tentang tiket film.\n\n${movieQuestion}\nFilm yang saya pilih: ${defaultMovie}`;

        let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        Linking.openURL(url).then((data) => {
            console.log('WhatsApp Opened');
        }).catch(() => {
            alert('Pastikan WhatsApp sudah terinstall pada perangkat Anda.');
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Penjualan Tiket Bioskop</Text>
            <Text style={styles.text}>Selamat datang di aplikasi penjualan tiket bioskop</Text>
            <TouchableOpacity onPress={handleOpenWhatsApp}>
                <Text style={styles.buttonText}>Chat dengan Admin via WhatsApp</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007BFF', 
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 20,
    },
});

export default ChatAdmin;
