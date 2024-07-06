import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';

const ChatAdmin = () => {

    const handleOpenWhatsApp = () => {
        let phoneNumber = '628175030077'; // Ubah nomor sesuai kebutuhan
        let movieQuestion = 'Silakan pilih film yang ingin Anda tonton:'; // Pertanyaan tentang film
        let defaultMovie = 'Avengers: Endgame'; // Film default

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
            <Text style={styles.subtitle}>Selamat datang di aplikasi penjualan tiket bioskop</Text>
            <TouchableOpacity onPress={handleOpenWhatsApp} style={styles.button}>
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
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007BFF', 
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ChatAdmin;
