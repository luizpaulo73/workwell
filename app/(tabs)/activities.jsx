import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from "react-native";
import ActivityCard from "../../components/ActivityCard";
import { activitiesData } from "../../components/activitiesData";

export default function ActivitiesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Atividades</Text>
                <Text style={styles.headerSubtitle}>
                    Participe de eventos de bem-estar
                </Text>
            </View>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {activitiesData.map((a) => (
                    <ActivityCard key={a.id} activity={a} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB", marginTop: 20 },
    header: {
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 4,
    },
    headerSubtitle: { fontSize: 14, color: "#6B7280" },
    scrollView: { flex: 1 },
    scrollContent: { paddingHorizontal: 16, paddingBottom: 24 },
});
