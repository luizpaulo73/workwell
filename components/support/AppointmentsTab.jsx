import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar, Video, Clock } from "lucide-react-native";

export const AppointmentsTab = ({ consultations = [] }) => {
    const latest = consultations.slice(-1)[0];
    return (
        <View>
            {latest && (
                <View style={styles.appointmentCard}>
                    <View style={styles.appointmentHeader}>
                        <View style={styles.iconContainer}>
                            <Calendar size={20} color="#2563EB" />
                        </View>
                        <View style={styles.appointmentInfo}>
                            <Text style={styles.appointmentTitle}>
                                {latest.title}
                            </Text>
                            <Text style={styles.appointmentDate}>
                                {latest.displayDate}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.videoButton}>
                            <Video size={16} color="#111827" />
                            <Text style={styles.videoButtonText}>
                                Videoconferência
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {!latest && (
                <View style={styles.emptyCard}>
                    <View style={styles.emptyHeader}>
                        <View style={styles.emptyIcon}>
                            <Clock size={20} color="#6B7280" />
                        </View>
                        <View>
                            <Text style={styles.emptyTitle}>
                                Próxima Consulta
                            </Text>
                            <Text style={styles.emptySubtitle}>
                                Você não tem consultas agendadas
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.scheduleNowButton}>
                        <Text style={styles.scheduleNowText}>
                            Agendar Agora
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    appointmentCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        marginBottom: 24,
    },
    appointmentHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 16,
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#EFF6FF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    appointmentInfo: { flex: 1 },
    appointmentTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
    },
    appointmentDate: { fontSize: 14, color: "#6B7280" },
    buttonRow: { flexDirection: "row", gap: 8 },
    videoButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#F3F4F6",
        paddingVertical: 10,
        borderRadius: 8,
    },
    videoButtonText: { fontSize: 14, fontWeight: "500", color: "#111827" },
    cancelButton: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 8,
        justifyContent: "center",
    },
    cancelButtonText: { fontSize: 14, fontWeight: "500", color: "#374151" },
    emptyCard: { backgroundColor: "#F3F4F6", borderRadius: 16, padding: 24 },
    emptyHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 16,
    },
    emptyIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
    },
    emptySubtitle: { fontSize: 14, color: "#6B7280" },
    scheduleNowButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    scheduleNowText: { color: "#FFFFFF", fontSize: 14, fontWeight: "500" },
});
