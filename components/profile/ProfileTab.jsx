import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LogOut } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export const ProfileTab = ({ userData }) => {
    const router = useRouter();

    const handleLogout = async () => {
        await AsyncStorage.removeItem("@auth_logged");
        await AsyncStorage.removeItem("@auth_user");
        router.replace("/Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Nome</Text>
                    <Text style={styles.value}>{userData.name}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Setor</Text>
                    <Text style={styles.value}>{userData.sector}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <LogOut size={18} color="#DC2626" />
                <Text style={styles.logoutButtonText}>Fazer Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { paddingHorizontal: 16 },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    infoItem: { marginBottom: 20 },
    label: { fontSize: 13, color: "#6B7280", marginBottom: 6 },
    value: { fontSize: 16, fontWeight: "500", color: "#111827" },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#FFFFFF",
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        marginBottom: 16,
    },
    editButtonText: { fontSize: 14, fontWeight: "500", color: "#111827" },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 16,
    },
    preferenceItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#2563EB",
        backgroundColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxChecked: {
        width: 10,
        height: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
    },
    preferenceText: { fontSize: 14, color: "#111827" },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#FFFFFF",
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#FECACA",
    },
    logoutButtonText: { fontSize: 14, fontWeight: "500", color: "#DC2626" },
});
