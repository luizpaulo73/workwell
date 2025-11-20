import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MessageCircle } from "lucide-react-native";

export const ChatTab = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <MessageCircle size={40} color="#2563EB" />
                </View>
                <Text style={styles.title}>Chat Emocional 24/7</Text>
                <Text style={styles.subtitle}>
                    Fale com profissionais moderados a qualquer momento
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Abrir Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        minHeight: 400,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 32,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center",
        maxWidth: 400,
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: "#DBEAFE",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
        marginBottom: 24,
        lineHeight: 20,
    },
    button: {
        backgroundColor: "#2563EB",
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "500" },
});
