// RegisterScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { supabase } from "./../supabase";  // Importe o cliente Supabase

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função que faz o registro do usuário com o Supabase
  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
  
    // Chama o método signUp do Supabase para criar a conta
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.log(error);  // Exibe o erro detalhado no console
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert("Sucesso", "Conta criada com sucesso! Verifique seu e-mail para ativação.");
      navigation.navigate("Login");  // Redireciona para a tela de login
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#007BFF",
    fontSize: 16,
  },
});
