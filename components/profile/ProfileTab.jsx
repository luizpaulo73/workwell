import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Settings, LogOut } from "lucide-react-native";

export const ProfileTab = ({ userData }) => {
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
            <TouchableOpacity style={styles.editButton}>
                <Settings size={18} color="#111827" />
                <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Preferências</Text>
                <View style={styles.preferenceItem}>
                    <View style={styles.checkbox}>
                        <View style={styles.checkboxChecked} />
                    </View>
                    <Text style={styles.preferenceText}>
                        Notificações de consultas
                    </Text>
                </View>
                <View style={styles.preferenceItem}>
                    <View style={styles.checkbox}>
                        <View style={styles.checkboxChecked} />
                    </View>
                    <Text style={styles.preferenceText}>
                        Notificações de atividades
                    </Text>
                </View>
                <View style={styles.preferenceItem}>
                    <View style={styles.checkbox}>
                        <View style={styles.checkboxChecked} />
                    </View>
                    <Text style={styles.preferenceText}>Check-in diário</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutButton}>
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
