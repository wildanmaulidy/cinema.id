import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Beranda = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Penjualan Tiket Bioskop</Text>
            <Text style={styles.text}>Selamat datang di aplikasi penjualan tiket bioskop</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Tiket')}>
                <Text style={styles.buttonText}>Pilih Tiket</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('chatAdmin')}>
                <Text style={styles.buttonText}>Chat dengan Admin</Text>
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
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Beranda;
