import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const logged = await AsyncStorage.getItem("@auth_logged");
                if (logged === "true") {
                    router.replace("/home");
                }
            } finally {
                setLoading(false);
            }
        })();
    }, [router]);

    const handleLogin = async () => {
        setError("");
        if (username.trim() !== "workwelladm" || password !== "ww1234") {
            setError("Credenciais inválidas");
            return;
        }
        try {
            await AsyncStorage.setItem("@auth_logged", "true");
            await AsyncStorage.setItem(
                "@auth_user",
                JSON.stringify({ username: "workwelladm" })
            );
            router.replace("/home");
        } catch (e) {
            setError("Falha ao salvar sessão");
        }
    };

    if (loading) {
        return (
            <View style={[styles.screen, { backgroundColor: "#fff" }]}>
                <Text style={styles.title}>Verificando sessão...</Text>
            </View>
        );
    }

    return (
        <View style={[styles.screen, { backgroundColor: "#fff" }]}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    placeholder="workwelladm"
                    style={styles.input}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="••••••"
                    style={styles.input}
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <TouchableOpacity
                    onPress={handleLogin}
                    style={[styles.btn, { backgroundColor: "#2563EB" }]}
                    disabled={!username || !password}
                >
                    <Text style={{ color: "#fff", fontSize: 18 }}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 54,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: { fontSize: 22, fontWeight: "600", marginBottom: 16 },
    formContainer: {
        width: "100%",
        maxWidth: 380,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#374151",
        marginTop: 12,
        marginBottom: 6,
    },
    input: {
        width: "100%",
        backgroundColor: "#F3F4F6",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        color: "#111827",
    },
    error: { color: "#DC2626", marginTop: 12, fontSize: 14 },
});
