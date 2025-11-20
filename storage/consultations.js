import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "consultations";

export async function getConsultations() {
    try {
        const raw = await AsyncStorage.getItem(KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch (e) {
        console.warn("Failed to load consultations", e);
        return [];
    }
}

export async function addConsultation(consultation) {
    try {
        const current = await getConsultations();
        const updated = [...current, consultation];
        await AsyncStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.warn("Failed to save consultation", e);
        throw e;
    }
}

export async function clearConsultations() {
    try {
        await AsyncStorage.removeItem(KEY);
    } catch (e) {
        console.warn("Failed to clear consultations", e);
    }
}

export async function removeConsultation(id) {
    try {
        const current = await getConsultations();
        const updated = current.filter((c) => c.id !== id);
        await AsyncStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.warn("Failed to remove consultation", e);
        throw e;
    }
}
