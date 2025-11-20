import React, { useEffect, useState, useCallback } from "react";
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
import {
    getSubscriptions,
    addSubscription,
} from "../../storage/activitySubscriptions";

export default function ActivitiesScreen() {
    const [subs, setSubs] = useState([]);

    const loadSubs = useCallback(async () => {
        const data = await getSubscriptions();
        setSubs(data);
    }, []);

    useEffect(() => {
        loadSubs();
    }, [loadSubs]);

    const handleSubscribe = async (id) => {
        const updated = await addSubscription(id);
        setSubs(updated);
    };

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
                    <ActivityCard
                        key={a.id}
                        activity={a}
                        subscribed={subs.includes(a.id)}
                        onSubscribe={handleSubscribe}
                    />
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
