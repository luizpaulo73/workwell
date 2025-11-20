import React, { useState, useCallback } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { ProfileTab } from "../../components/profile/ProfileTab";
import { HistoryTab } from "../../components/profile/HistoryTab";
import { ProfileTabNav } from "../../components/profile/TabNav";
import { getConsultations } from "../../storage/consultations";
import { useFocusEffect } from "expo-router";

export default function ProfileScreen() {
    const [activeSubTab, setActiveSubTab] = useState("profile");

    const userData = {
        name: "João Silva",
        email: "joao@empresa.com",
        sector: "Tecnologia",
        role: "Funcionário • TI",
    };

    const staticActivities = [
        { id: 1, icon: "🧘", title: "Participou da Meditação", date: "Ontem" },
        { id: 2, icon: "🍻", title: "Happy Hour Virtual", date: "20 Nov" },
        { id: 3, icon: "💬", title: "Palestra: Burnout", date: "18 Nov" },
    ];
    const [storedConsultations, setStoredConsultations] = useState([]);

    const loadConsultations = useCallback(async () => {
        const data = await getConsultations();
        // Map consultations to history activity shape
        const mapped = data.map((c) => ({
            id: c.id,
            icon: c.icon || "👩‍⚕️",
            title: c.title,
            date: c.displayDate,
        }));
        setStoredConsultations(mapped);
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadConsultations();
        }, [loadConsultations])
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <ProfileHeader name={userData.name} role={userData.role} />
                <ProfileTabNav
                    activeTab={activeSubTab}
                    onTabChange={setActiveSubTab}
                />
                {activeSubTab === "profile" && (
                    <ProfileTab userData={userData} />
                )}
                {activeSubTab === "history" && (
                    <HistoryTab
                        activities={[
                            ...storedConsultations,
                            ...staticActivities,
                        ]}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB", marginTop: 20 },
    scrollView: { flex: 1 },
    scrollContent: { paddingBottom: 100 },
});
