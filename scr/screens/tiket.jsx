import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';

const Tiket = () => {
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
            <Text style={styles.filmText}>Rp {item.harga}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pemesanan Tiket Bioskop</Text>
            <FlatList
                data={daftarFilm}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
            />
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
    filmItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        marginBottom: 5,
        borderRadius: 5,
    },
    filmText: {
        fontSize: 16,
        color: '#333',
    },
    infoContainer: {
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'blue',
    },
    input: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
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
    },
    total: {
        marginTop: 20,
        fontSize: 20,
        color: 'blue',
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
    },
});
