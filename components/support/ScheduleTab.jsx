import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { AlertCircle, Star } from "lucide-react-native";
import { CalendarPicker } from "./CalendarPicker";

export const ScheduleTab = ({ onSchedule }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const psychologists = [
        {
            id: 1,
            name: "Dra. Marina Silva",
            avatar: "👩‍⚕️",
            crp: "CRP 12345",
            specialty: "Ansiedade",
            rating: 4.9,
        },
        {
            id: 2,
            name: "Dr. Carlos Santos",
            avatar: "👨‍⚕️",
            crp: "CRP 54321",
            specialty: "Burnout",
            rating: 4.8,
        },
        {
            id: 3,
            name: "Dra. Ana Costa",
            avatar: "👩‍⚕️",
            crp: "CRP 11111",
            specialty: "Relacionamentos",
            rating: 5,
        },
    ];

    const formatDate = (date) => {
        if (!date) return "Selecionar data";
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        return `${d}/${m}`;
    };

    const handleSchedule = (psy) => {
        if (!selectedDate) return;
        const date = new Date(selectedDate);
        date.setHours(14, 0, 0, 0);
        const displayDate = `${date.getDate().toString().padStart(2, "0")}/${(
            date.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")} ${date
            .getHours()
            .toString()
            .padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
        onSchedule &&
            onSchedule({
                id: Date.now(),
                psychologist: psy.name,
                specialty: psy.specialty,
                dateISO: date.toISOString(),
                displayDate,
                icon: psy.avatar,
                title: `Consulta com ${psy.name}`,
                dateLabel: displayDate,
            });
    };

    return (
        <View>
            <Modal
                visible={showCalendar}
                transparent
                animationType="fade"
                onRequestClose={() => setShowCalendar(false)}
            >
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Selecionar Data</Text>
                        <CalendarPicker
                            value={selectedDate}
                            onChange={(d) => {
                                setSelectedDate(d);
                                setShowCalendar(false);
                            }}
                        />
                        <TouchableOpacity
                            style={styles.modalCloseBtn}
                            onPress={() => setShowCalendar(false)}
                        >
                            <Text style={styles.modalCloseText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.sosCard}>
                <View style={styles.sosLeft}>
                    <View style={styles.sosIcon}>
                        <AlertCircle size={24} color="#DC2626" />
                    </View>
                    <View>
                        <Text style={styles.sosTitle}>
                            Precisa de ajuda urgente?
                        </Text>
                        <Text style={styles.sosSubtitle}>Ative o modo SOS</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.sosButton}>
                    <Text style={styles.sosButtonText}>SOS</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Psicólogos Disponíveis</Text>
            <View style={styles.dateSelectionRow}>
                <TouchableOpacity
                    style={styles.selectDateButton}
                    onPress={() => setShowCalendar(true)}
                >
                    <Text style={styles.selectDateButtonText}>
                        {formatDate(selectedDate)}
                    </Text>
                </TouchableOpacity>
                {selectedDate && (
                    <Text style={styles.selectedDateInfo}>
                        Data escolhida: {formatDate(selectedDate)}
                    </Text>
                )}
            </View>
            <View style={styles.psychologistsList}>
                {psychologists.map((psy) => (
                    <View key={psy.id} style={styles.psychologistCard}>
                        <View style={styles.psychologistContent}>
                            <View style={styles.psychologistLeft}>
                                <View style={styles.avatar}>
                                    <Text style={styles.avatarEmoji}>
                                        {psy.avatar}
                                    </Text>
                                </View>
                                <View style={styles.psychologistInfo}>
                                    <Text style={styles.psychologistName}>
                                        {psy.name}
                                    </Text>
                                    <Text style={styles.psychologistDetails}>
                                        {psy.crp} • {psy.specialty}
                                    </Text>
                                    <View style={styles.ratingContainer}>
                                        {[...Array(4)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                color="#FBBF24"
                                                fill="#FBBF24"
                                            />
                                        ))}
                                        <Star
                                            size={14}
                                            color={
                                                psy.rating === 5
                                                    ? "#FBBF24"
                                                    : "#D1D5DB"
                                            }
                                            fill={
                                                psy.rating === 5
                                                    ? "#FBBF24"
                                                    : "transparent"
                                            }
                                        />
                                        <Text style={styles.ratingText}>
                                            {psy.rating}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.actionsColumn}>
                                <TouchableOpacity
                                    style={[
                                        styles.scheduleButton,
                                        !selectedDate &&
                                            styles.scheduleButtonDisabled,
                                    ]}
                                    disabled={!selectedDate}
                                    onPress={() => handleSchedule(psy)}
                                >
                                    <Text style={styles.scheduleButtonText}>
                                        Agendar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sosCard: {
        backgroundColor: "#FEF2F2",
        borderWidth: 2,
        borderColor: "#FECACA",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    sosLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
    sosIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    sosTitle: { fontSize: 14, fontWeight: "600", color: "#111827" },
    sosSubtitle: { fontSize: 12, color: "#DC2626" },
    sosButton: {
        backgroundColor: "#DC2626",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    sosButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 14 },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 16,
    },
    psychologistsList: { gap: 12 },
    psychologistCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    psychologistContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    psychologistLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        flex: 1,
    },
    avatar: {
        width: 48,
        height: 48,
        backgroundColor: "#EFF6FF",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarEmoji: { fontSize: 24 },
    psychologistInfo: { flex: 1 },
    psychologistName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 2,
    },
    psychologistDetails: { fontSize: 14, color: "#6B7280", marginBottom: 4 },
    ratingContainer: { flexDirection: "row", alignItems: "center", gap: 2 },
    ratingText: { fontSize: 14, color: "#374151", marginLeft: 4 },
    scheduleButton: {
        backgroundColor: "#2563EB",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    scheduleButtonText: { color: "#FFFFFF", fontWeight: "500", fontSize: 14 },
    scheduleButtonDisabled: { opacity: 0.4 },
    actionsColumn: { justifyContent: "center", alignItems: "flex-end", gap: 8 },
    selectDateButton: {
        backgroundColor: "#0C5C8D",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    selectDateButtonText: { color: "#FFFFFF", fontSize: 12, fontWeight: "600" },
    dateSelectionRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
    },
    selectedDateInfo: { fontSize: 12, color: "#374151" },
    modalBackdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    modalContent: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        maxWidth: 420,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 12,
    },
    modalCloseBtn: {
        marginTop: 8,
        alignSelf: "flex-end",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: "#F3F4F6",
    },
    modalCloseText: { fontSize: 13, fontWeight: "500", color: "#374151" },
});
