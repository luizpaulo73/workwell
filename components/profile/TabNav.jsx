import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const ProfileTabNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: "profile", label: "Perfil" },
        { id: "history", label: "Histórico" },
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
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        backgroundColor: "#E5E7EB",
        borderRadius: 8,
        alignItems: "center",
    },
    tabActive: { backgroundColor: "#0C5C8D" },
    tabText: { fontSize: 14, fontWeight: "500", color: "#374151" },
    tabTextActive: { color: "#FFFFFF" },
});
