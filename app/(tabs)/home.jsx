import { useState, useCallback } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from "react-native";
import {
    Brain,
    Phone,
    AlertCircle,
    Target,
    BarChart3,
    ChevronRight,
    Calendar,
    Users,
} from "lucide-react-native";
import { useFocusEffect } from "expo-router";
import { getSubscriptions } from "../../storage/activitySubscriptions";
import { activitiesData } from "../../components/activitiesData";

function MoodEmojiSelector({ onSelect }) {
    const [selected, setSelected] = useState(null);
    const moods = [
        { emoji: "😄", value: 5, label: "Ótimo" },
        { emoji: "😊", value: 4, label: "Bem" },
        { emoji: "😐", value: 3, label: "Normal" },
        { emoji: "😟", value: 2, label: "Ruim" },
        { emoji: "😢", value: 1, label: "Péssimo" },
    ];

    const handleSelect = (value) => {
        setSelected(value);
        onSelect(value);
    };

    return (
        <View style={styles.moodContainer}>
            {moods.map((mood) => (
                <TouchableOpacity
                    key={mood.value}
                    style={[
                        styles.moodButton,
                        selected === mood.value && styles.moodButtonSelected,
                    ]}
                    onPress={() => handleSelect(mood.value)}
                >
                    <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default function HomeTab() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [participationPct, setParticipationPct] = useState(0);
    const userName = "João";

    const shortcuts = [
        {
            icon: Brain,
            label: "Agendar\nPsicólogo",
            color: "#DBEAFE",
            iconColor: "#3B82F6",
        },
        {
            icon: Phone,
            label: "Chat\nEmocional",
            color: "#D1FAE5",
            iconColor: "#10B981",
        },
        {
            icon: AlertCircle,
            label: "SOS\nEmocional",
            color: "#FEE2E2",
            iconColor: "#EF4444",
        },
        {
            icon: Target,
            label: "Bem-Estar",
            color: "#F3E8FF",
            iconColor: "#A855F7",
        },
        {
            icon: BarChart3,
            label: "Histórico",
            color: "#FFEDD5",
            iconColor: "#F97316",
        },
    ];

    const upcomingActivities = [
        { id: 1, title: "Meditação Guiada", time: "14:00", participants: 24 },
        { id: 2, title: "Happy Hour Virtual", time: "18:00", participants: 18 },
    ];

    const availableActivities = [
        "🏃 Corrida em Grupo",
        "🧘 Yoga ao Vivo",
        "💬 Palestra: Resiliência",
    ];

    const computeParticipation = useCallback(async () => {
        const subs = await getSubscriptions();
        const total = activitiesData.length || 1; // avoid divide by zero
        const pct = Math.round((subs.length / total) * 100);
        setParticipationPct(pct);
    }, []);

    useFocusEffect(
        useCallback(() => {
            computeParticipation();
        }, [computeParticipation])
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Bem-vindo de volta,</Text>
                    <Text style={styles.greetingText}>Olá, {userName}! 👋</Text>
                    <Text style={styles.subtitleText}>
                        Como você está hoje?
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Check-in Diário</Text>
                        <MoodEmojiSelector onSelect={setSelectedMood} />
                        {selectedMood && (
                            <Text style={styles.feedbackText}>
                                Obrigado por compartilhar como você está. Que
                                tal fazer uma pausa guiada?
                            </Text>
                        )}
                    </View>

                    <View style={styles.progressCard}>
                        <View style={styles.progressHeader}>
                            <Text style={styles.progressTitle}>
                                Participação do Mês
                            </Text>
                            <Text style={styles.progressPercentage}>
                                {participationPct}%
                            </Text>
                        </View>
                        <View style={styles.progressBarBg}>
                            <View
                                style={[
                                    styles.progressBarFill,
                                    { width: `${participationPct}%` },
                                ]}
                            />
                        </View>
                        <Text style={styles.progressFeedback}>
                            {participationPct === 0
                                ? "Comece participando de uma atividade."
                                : participationPct < 50
                                ? "Bom início! Continue para aumentar sua participação."
                                : participationPct < 100
                                ? "Ótimo trabalho! Quase lá."
                                : "Parabéns! Você participou de todas as atividades."}
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Atalhos Rápidos</Text>
                        <View style={styles.shortcutsGrid}>
                            {shortcuts.map((shortcut, index) => {
                                const Icon = shortcut.icon;
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.shortcutItem}
                                    >
                                        <View
                                            style={[
                                                styles.shortcutIcon,
                                                {
                                                    backgroundColor:
                                                        shortcut.color,
                                                },
                                            ]}
                                        >
                                            <Icon
                                                size={20}
                                                color={shortcut.iconColor}
                                            />
                                        </View>
                                        <Text style={styles.shortcutLabel}>
                                            {shortcut.label}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Programação do Dia
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreText}>Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.activitiesList}>
                            {upcomingActivities.map((activity) => (
                                <TouchableOpacity
                                    key={activity.id}
                                    style={styles.activityCard}
                                >
                                    <Calendar
                                        size={20}
                                        color="#3B82F6"
                                        style={styles.activityIcon}
                                    />
                                    <View style={styles.activityInfo}>
                                        <Text style={styles.activityTitle}>
                                            {activity.title}
                                        </Text>
                                        <Text style={styles.activityTime}>
                                            {activity.time}
                                        </Text>
                                    </View>
                                    <View style={styles.participantsBadge}>
                                        <Users size={12} color="#6B7280" />
                                        <Text style={styles.participantsText}>
                                            {activity.participants}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Atividades Disponíveis
                            </Text>
                            <ChevronRight size={16} color="#9CA3AF" />
                        </View>
                        <View style={styles.availableList}>
                            {availableActivities.map((activity, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.availableCard}
                                >
                                    <Text style={styles.availableTitle}>
                                        {activity}
                                    </Text>
                                    <ChevronRight size={20} color="#9CA3AF" />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF", marginTop: 20 },
    scrollView: { flex: 1 },
    header: {
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 24,
    },
    welcomeText: { fontSize: 14, color: "#6B7280", marginBottom: 4 },
    greetingText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#111827",
        marginBottom: 8,
    },
    subtitleText: { fontSize: 14, color: "#6B7280" },
    content: { paddingHorizontal: 16, paddingBottom: 40 },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        marginTop: 16,
        borderWidth: 2,
        borderColor: "#F3F4F6",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 16,
    },
    moodContainer: { flexDirection: "row", justifyContent: "space-between" },
    moodButton: {
        width: 56,
        height: 56,
        borderRadius: 12,
        backgroundColor: "#F9FAFB",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "transparent",
    },
    moodButtonSelected: { backgroundColor: "#EEF2FF", borderColor: "#3B82F6" },
    moodEmoji: { fontSize: 28 },
    feedbackText: {
        textAlign: "center",
        fontSize: 12,
        color: "#6B7280",
        marginTop: 16,
        lineHeight: 18,
    },
    progressCard: {
        backgroundColor: "#F0FDF4",
        borderRadius: 12,
        padding: 16,
        marginTop: 16,
    },
    progressHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    progressTitle: { fontSize: 16, fontWeight: "600", color: "#111827" },
    progressPercentage: { fontSize: 24, fontWeight: "bold", color: "#3B82F6" },
    progressBarBg: {
        width: "100%",
        height: 8,
        backgroundColor: "#E5E7EB",
        borderRadius: 4,
    },
    progressBarFill: { height: 8, backgroundColor: "#3B82F6", borderRadius: 4 },
    progressFeedback: { fontSize: 12, color: "#6B7280", marginTop: 12 },
    section: { marginTop: 24 },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    sectionTitle: { fontSize: 14, fontWeight: "600", color: "#111827" },
    seeMoreText: { fontSize: 12, color: "#3B82F6" },
    shortcutsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
    shortcutItem: {
        width: "30%",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        backgroundColor: "#FFFFFF",
    },
    shortcutIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    shortcutLabel: {
        fontSize: 10,
        textAlign: "center",
        color: "#111827",
        fontWeight: "500",
        lineHeight: 14,
    },
    activitiesList: { gap: 8 },
    activityCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        gap: 12,
    },
    activityIcon: { marginTop: 2 },
    activityInfo: { flex: 1 },
    activityTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#111827",
        marginBottom: 2,
    },
    activityTime: { fontSize: 12, color: "#6B7280" },
    participantsBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        gap: 4,
    },
    participantsText: { fontSize: 12, color: "#6B7280" },
    availableList: { gap: 12 },
    availableCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    availableTitle: { fontSize: 14, fontWeight: "500", color: "#111827" },
});
