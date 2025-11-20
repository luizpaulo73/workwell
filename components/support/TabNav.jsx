import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const TabNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: "schedule", label: "Agendar" },
        { id: "appointments", label: "Agendamentos" },
        { id: "chat", label: "Chat 24/7" },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={[
                        styles.tab,
                        activeTab === tab.id && styles.tabActive,
                    ]}
                    onPress={() => onTabChange(tab.id)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === tab.id && styles.tabTextActive,
                        ]}
                    >
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 24,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#E5E7EB",
        borderRadius: 8,
        alignItems: "center",
    },
    tabActive: {
        backgroundColor: "#2563EB",
    },
    tabText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#374151",
    },
    tabTextActive: {
        color: "#FFFFFF",
    },
});
