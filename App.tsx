import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const PROFILE_IMAGES: string[] = [
  "https://i.pravatar.cc/300?img=3",
  "https://i.pravatar.cc/300?img=12",
];

export default function App(): React.JSX.Element {
  const [name, setName] = useState<string>("");
  const [isAltImage, setIsAltImage] = useState<boolean>(false);

  const currentImage: string = isAltImage
    ? PROFILE_IMAGES[1]
    : PROFILE_IMAGES[0];

  function handleSave(): void {
    if (!name.trim()) {
      Alert.alert("Atenção", "Por favor, digite seu nome antes de salvar.");
      return;
    }

    Alert.alert("Perfil Salvo!", `Nome: ${name}`);
  }

  function handleToggleImage(): void {
    setIsAltImage((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Perfil Rápido</Text>

      <Image
        source={{ uri: currentImage }}
        style={styles.profileImage}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleImage}>
        <Text style={styles.toggleButtonText}>Trocar Foto</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#e94560",
    marginBottom: 16,
  },
  toggleButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#e94560",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  toggleButtonText: {
    color: "#e94560",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    backgroundColor: "#16213e",
    borderWidth: 1,
    borderColor: "#0f3460",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#fff",
    marginBottom: 24,
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#e94560",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
