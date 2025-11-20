import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "activity_subscriptions";

export async function getSubscriptions() {
    try {
        const raw = await AsyncStorage.getItem(KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch (e) {
        console.warn("Failed to load subscriptions", e);
        return [];
    }
}

export async function addSubscription(id) {
    try {
        const current = await getSubscriptions();
        if (current.includes(id)) return current; // prevent duplicates
        const updated = [...current, id];
        await AsyncStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
    } catch (e) {
        console.warn("Failed to save subscription", e);
        throw e;
    }
}

export async function clearSubscriptions() {
    try {
        await AsyncStorage.removeItem(KEY);
    } catch (e) {
        console.warn("Failed to clear subscriptions", e);
    }
}
