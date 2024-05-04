import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profil Kami</Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Visi:</Text>{'\n'}
        Menjadi platform pemesanan tiket bioskop terdepan yang memberikan pengalaman terbaik bagi para pengguna.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Misi:</Text>{'\n'}
        1. Memberikan layanan pemesanan tiket yang mudah, cepat, dan andal.{'\n'}
        2. Menyediakan berbagai pilihan film dan jadwal yang menarik bagi para pengguna.{'\n'}
        3. Memastikan kepuasan pelanggan dengan layanan yang berkualitas tinggi.
      </Text>
      <Text style={[styles.text, styles.history]}>
        <Text style={styles.boldText}>Riwayat:</Text>{'\n'}
        Didirikan pada tahun 2010, kami telah melayani ribuan pelanggan dan terus berkembang menjadi salah satu platform pemesanan tiket bioskop terkemuka di Indonesia.
      </Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff', // Warna latar belakang
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Warna font untuk judul
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555', // Warna untuk teks
    textAlign: 'center', // Teks rata tengah
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333', // Warna untuk teks tebal
  },
  history: {
    fontStyle: 'italic',
    marginTop: 20,
  },
});
