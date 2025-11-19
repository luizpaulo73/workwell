import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

    const handleEnter = () => router.replace("/home");

    return (
        <View style={[styles.screen, { backgroundColor: "#fff" }]}>
            <Text style={styles.title}>Entrar</Text>
            <TouchableOpacity
                onPress={handleEnter}
                style={[styles.btn, { backgroundColor: "#2563EB" }]}
            >
                <Text style={{ color: "#fff", fontSize: 18 }}>
                    Ir para a Home
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 54,
        marginHorizontal: "16%",
        paddingInline: 24,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: { fontSize: 22, fontWeight: "600", marginBottom: 16 },
    formContainer: {
        flex: 0.75,
        gap: "5%",
        justifyContent: "center",
    },
    inputBox: {},
});
