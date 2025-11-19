import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
