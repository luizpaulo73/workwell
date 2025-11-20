import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function buildMonth(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    for (let d = 1; d <= lastDay.getDate(); d++) {
        days.push(new Date(year, month, d));
    }
    return days;
}

export const CalendarPicker = ({ value, onChange }) => {
    const today = new Date();
    const [cursor, setCursor] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const days = buildMonth(year, month);

    const monthLabel = cursor.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
    });

    const prev = () => setCursor(new Date(year, month - 1, 1));
    const next = () => setCursor(new Date(year, month + 1, 1));

    const isSameDay = (a, b) =>
        a &&
        b &&
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={prev} style={styles.navBtn}>
                    <Text style={styles.navTxt}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.month}>{monthLabel}</Text>
                <TouchableOpacity onPress={next} style={styles.navBtn}>
                    <Text style={styles.navTxt}>{">"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.weekRow}>
                {[
                    { key: "dom", label: "D" },
                    { key: "seg", label: "S" },
                    { key: "ter", label: "T" },
                    { key: "qua", label: "Q" },
                    { key: "qui", label: "Q" },
                    { key: "sex", label: "S" },
                    { key: "sab", label: "S" },
                ].map((d) => (
                    <Text key={d.key} style={styles.weekDay}>
                        {d.label}
                    </Text>
                ))}
            </View>
            <View style={styles.grid}>
                {/* Leading blanks */}
                {Array(firstWeekOffset(cursor))
                    .fill(0)
                    .map((_, i) => (
                        <View key={"b" + i} style={styles.dayCell} />
                    ))}
                {days.map((day) => {
                    const disabled =
                        day <
                        new Date(
                            today.getFullYear(),
                            today.getMonth(),
                            today.getDate()
                        );
                    const selected = isSameDay(day, value);
                    return (
                        <TouchableOpacity
                            key={day.toISOString()}
                            style={[
                                styles.dayCell,
                                selected && styles.daySelected,
                                disabled && styles.dayDisabled,
                            ]}
                            disabled={disabled}
                            onPress={() => onChange && onChange(day)}
                        >
                            <Text
                                style={[
                                    styles.dayText,
                                    selected && styles.dayTextSelected,
                                    disabled && styles.dayTextDisabled,
                                ]}
                            >
                                {day.getDate()}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

function firstWeekOffset(date) {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    return first.getDay();
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        marginBottom: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    month: { fontSize: 16, fontWeight: "600", color: "#111827" },
    navBtn: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#F3F4F6",
        borderRadius: 8,
    },
    navTxt: { fontSize: 16, fontWeight: "600", color: "#374151" },
    weekRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    weekDay: {
        width: 32,
        textAlign: "center",
        fontSize: 12,
        fontWeight: "600",
        color: "#6B7280",
    },
    grid: { flexDirection: "row", flexWrap: "wrap" },
    dayCell: {
        width: "14.285%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
    },
    dayText: { fontSize: 14, color: "#374151" },
    daySelected: { backgroundColor: "#0C5C8D", borderRadius: 12 },
    dayTextSelected: { color: "#FFFFFF", fontWeight: "600" },
    dayDisabled: { opacity: 0.35 },
    dayTextDisabled: { color: "#9CA3AF" },
});
