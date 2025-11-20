import React, { useState, useCallback } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    StyleSheet,
} from "react-native";
import { TabNav } from "../../components/support/TabNav";
import { ScheduleTab } from "../../components/support/ScheduleTab";
import { AppointmentsTab } from "../../components/support/AppointmentsTab";
import { ChatTab } from "../../components/support/ChatTab";
import { addConsultation, getConsultations } from "../../storage/consultations";

export default function SupportTab() {
    const [activeSubTab, setActiveSubTab] = useState("schedule");
    const [consultations, setConsultations] = useState([]);

    const loadConsultations = useCallback(async () => {
        const data = await getConsultations();
        setConsultations(data);
    }, []);

    const handleSchedule = async (consultation) => {
        const updated = await addConsultation(consultation);
        setConsultations(updated);
    };

    React.useEffect(() => {
        loadConsultations();
    }, [loadConsultations]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Apoio Psicológico</Text>
                <Text style={styles.headerSubtitle}>
                    Profissionais qualificados para ajudá-lo
                </Text>
            </View>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.content}>
                    <TabNav
                        activeTab={activeSubTab}
                        onTabChange={setActiveSubTab}
                    />
                    {activeSubTab === "schedule" && (
                        <ScheduleTab onSchedule={handleSchedule} />
                    )}
                    {activeSubTab === "appointments" && (
                        <AppointmentsTab consultations={consultations} />
                    )}
                    {activeSubTab === "chat" && <ChatTab />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB", marginTop: 20 },
    header: {
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 16,
        paddingTop: 24,
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
    scrollContent: { paddingBottom: 100 },
    content: { paddingHorizontal: 16 },
});
