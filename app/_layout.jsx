import { Stack } from "expo-router";
import { ThemeProvider } from "../src/context/themeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/services/i18n";

export default function RootLayout() {
    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <Stack initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        options={{ title: "Tela de Login", headerShown: false }}
                    />
                    <Stack.Screen
                        name="(tabs)/inicio"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </ThemeProvider>
        </I18nextProvider>
    );
}
