import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Bem-vindo!", "Login realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => router.push("/register")}>
        <Text style={styles.linkText}>Não tem uma conta? Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupará toda a tela
    justifyContent: "center", // Centraliza os itens verticalmente
    alignItems: "center", // Centraliza os itens horizontalmente
    padding: 20, // Adiciona espaçamento interno
    backgroundColor: "#f5f5f5", // Fundo cinza claro
  },
  title: {
    fontSize: 28, // Tamanho grande para o título
    fontWeight: "bold", // Deixa o título em negrito
    marginBottom: 20, // Adiciona espaço abaixo do título
    color: "#333", // Cor do texto
  },
  input: {
    width: "100%", // Ocupa toda a largura disponível
    maxWidth: 400, // Limita a largura máxima (útil para tablets)
    height: 50, // Altura do campo de entrada
    backgroundColor: "#fff", // Fundo branco
    borderRadius: 8, // Borda arredondada
    paddingHorizontal: 15, // Espaçamento interno horizontal
    marginBottom: 15, // Espaçamento entre os inputs
    borderWidth: 1, // Borda fina
    borderColor: "#ddd", // Cor da borda
    fontSize: 16, // Tamanho da fonte
  },
  button: {
    width: "100%", // Botão ocupa toda a largura disponível
    maxWidth: 400, // Limita a largura máxima
    height: 50, // Altura do botão
    backgroundColor: "#4CAF50", // Fundo verde
    borderRadius: 8, // Borda arredondada
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza o texto horizontalmente
    marginTop: 10, // Espaçamento acima do botão
  },
  buttonText: {
    color: "#fff", // Texto branco
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Texto em negrito
  },
  link: {
    marginTop: 15, // Espaçamento acima do link
  },
  linkText: {
    color: "#007BFF", // Azul para indicar um link
    fontSize: 16, // Tamanho da fonte
  },
});
