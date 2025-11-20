import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export const HistoryTab = ({ activities }) => {
    return (
        <ScrollView style={styles.container}>
            {activities.map((activity) => (
                <View key={activity.id} style={styles.card}>
                    <Text style={styles.icon}>{activity.icon}</Text>
                    <View style={styles.info}>
                        <Text style={styles.title}>{activity.title}</Text>
                        <Text style={styles.date}>{activity.date}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { paddingHorizontal: 16 },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    icon: { fontSize: 32 },
    info: { flex: 1 },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
    },
    date: { fontSize: 14, color: "#6B7280" },
});
