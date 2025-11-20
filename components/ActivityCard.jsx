import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar, MapPin, Users, Check } from "lucide-react-native";

export default function ActivityCard({ activity, subscribed, onSubscribe }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.cardLeft}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconEmoji}>{activity.icon}</Text>
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.activityTitle}>
                            {activity.title}
                        </Text>
                        <Text style={styles.activityCategory}>
                            {activity.category}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[
                        styles.subscribeButton,
                        subscribed && styles.subscribeButtonSubscribed,
                    ]}
                    disabled={subscribed}
                    onPress={() =>
                        !subscribed && onSubscribe && onSubscribe(activity.id)
                    }
                >
                    {subscribed ? (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 4,
                            }}
                        >
                            <Check size={14} color="#065F46" />
                            <Text style={styles.subscribeButtonSubscribedText}>
                                Inscrito
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.subscribeButtonText}>
                            Inscrever
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.cardDetails}>
                <View style={styles.detailRow}>
                    <Calendar size={14} color="#6B7280" />
                    <Text style={styles.detailText}>{activity.date}</Text>
                </View>
                <View style={styles.detailRow}>
                    <MapPin size={14} color="#6B7280" />
                    <Text style={styles.detailText}>{activity.location}</Text>
                </View>
            </View>
            <View style={styles.cardFooter}>
                <View style={styles.vacancyInfo}>
                    <Users size={14} color="#6B7280" />
                    <Text style={styles.vacancyText}>{activity.vacancies}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    cardLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: "#F9FAFB",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    iconEmoji: { fontSize: 24 },
    cardInfo: { flex: 1 },
    activityTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 2,
    },
    activityCategory: { fontSize: 13, color: "#6B7280" },
    subscribeButton: {
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    subscribeButtonText: { fontSize: 13, fontWeight: "500", color: "#111827" },
    subscribeButtonSubscribed: {
        backgroundColor: "#ECFDF5",
        borderColor: "#6EE7B7",
    },
    subscribeButtonSubscribedText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#065F46",
    },
    cardDetails: { gap: 8, marginBottom: 12 },
    detailRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    detailText: { fontSize: 13, color: "#6B7280" },
    cardFooter: {
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#F3F4F6",
    },
    vacancyInfo: { flexDirection: "row", alignItems: "center", gap: 6 },
    vacancyText: { fontSize: 13, color: "#6B7280" },
});
