// Dupla: Jonatan e Thiago

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CartaoPerfil(props) {

  function enviarEmail() {
    Alert.alert("E-mail enviado para: " + props.email);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.profissao}>{props.profissao}</Text>
      <Text style={styles.cidade}>{props.cidade}</Text>
      <Text style={styles.email}>{props.email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>ENVIAR E-MAIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafc',
    padding: 25,
    borderRadius: 15,
    elevation: 8,
    width: 280,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5
  },

  profissao: {
    fontSize: 15,
    color: '#444',
    marginBottom: 3
  },

  cidade: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },

  email: {
    fontSize: 13,
    color: '#888',
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1
  }
});