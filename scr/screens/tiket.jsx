import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tiket = () => {
    const navigation = useNavigation();
    const [tiket, setTiket] = useState({
        nama: '',
        harga: '',
        jumlah: 1,
        total: 0
    });

    const daftarFilm = [
        { id: 1, nama: 'Avengers: Endgame', harga: 50000 },
        { id: 2, nama: 'Spider-Man: No Way Home', harga: 45000 },
        { id: 3, nama: 'Black Widow', harga: 40000 },
        { id: 4, nama: 'Doctor Strange', harga: 42000 },
        { id: 5, nama: 'Shang-Chi', harga: 48000 },
        { id: 6, nama: 'Eternals', harga: 47000 },
        { id: 7, nama: 'Captain Marvel', harga: 46000 },
        { id: 8, nama: 'Thor: Ragnarok', harga: 43000 },
        { id: 9, nama: 'Guardians of the Galaxy', harga: 44000 },
        { id: 10, nama: 'Black Panther', harga: 45000 },
    ];

    useEffect(() => {
        if (daftarFilm.length > 0) {
            const filmPertama = daftarFilm[0];
            setTiket({ ...tiket, nama: filmPertama.nama, harga: filmPertama.harga });
        }
    }, []);

    const hitungTotal = () => {
        const total = tiket.harga * tiket.jumlah;
        setTiket({ ...tiket, total: total });
    };

    const pesanSekarang = () => {
        const { nama, jumlah, total } = tiket;
        if (nama && jumlah > 0 && total > 0) {
            alert(`Tiket ${nama} (${jumlah} tiket) Anda Berhasil di Pesan!\nTotal Harga: Rp ${total}`);
        } else {
            alert("Silakan lengkapi pesanan Anda terlebih dahulu.");
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.filmItem}
            onPress={() => setTiket({ ...tiket, nama: item.nama, harga: item.harga })}
        >
            <Text style={styles.filmText}>{item.nama}</Text>
            <Text style={styles.filmPrice}>Rp {item.harga}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pemesanan Tiket Bioskop</Text>
            <FlatList
                data={daftarFilm}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                style={styles.list}
            />
            {tiket.nama ? (
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Harga Tiket:</Text>
                    <TextInput
                        style={styles.input}
                        value={tiket.harga.toString()}
                        keyboardType="numeric"
                        onChangeText={(text) => setTiket({ ...tiket, harga: parseFloat(text) })}
                        editable={false}
                    />
                    <Text style={styles.label}>Jumlah:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Masukkan jumlah tiket"
                        keyboardType="numeric"
                        onChangeText={(text) => setTiket({ ...tiket, jumlah: parseInt(text) })}
                    />
                </View>
            ) : null}
            <TouchableOpacity
                style={styles.button}
                onPress={hitungTotal}>
                <Text style={styles.buttonText}>Hitung Total</Text>
            </TouchableOpacity>
            <Text style={styles.total}>Total Harga: Rp {tiket.total}</Text>
            <TouchableOpacity
                style={styles.pesanButton}
                onPress={pesanSekarang}>
                <Text style={styles.pesanButtonText}>Pesan Sekarang</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.berandaButton}
                onPress={() => navigation.navigate('Beranda')}>
                <Text style={styles.berandaButtonText}>Kembali ke Beranda</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Tiket;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
    list: {
        marginBottom: 20,
        width: '100%',
    },
    flatListContent: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    filmItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 3,
    },
    filmText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    filmPrice: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoContainer: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'blue',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        width: 200,
        textAlign: 'center',
        color: 'black', 
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    total: {
        marginTop: 20,
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
    },
    pesanButton: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3,
    },
    pesanButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    berandaButton: {
        backgroundColor: 'red',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3,
    },
    berandaButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
