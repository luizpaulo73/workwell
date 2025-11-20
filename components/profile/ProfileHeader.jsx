import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { User } from "lucide-react-native";

export const ProfileHeader = ({ name, role }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <User size={32} color="#FFFFFF" />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 20,
        gap: 16,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#0C5C8D",
        alignItems: "center",
        justifyContent: "center",
    },
    info: { flex: 1 },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 2,
    },
    role: { fontSize: 14, color: "#6B7280" },
});
