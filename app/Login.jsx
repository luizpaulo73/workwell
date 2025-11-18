import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../src/context/themeContext";
import { useTranslation } from "react-i18next";
import BaseScreens from "../src/_components/BaseScreens/BaseScreens";

export default function Login() {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const router = useRouter();

    const handleEnter = () => router.replace("/home");

    return (
        <BaseScreens title={t("login.title")}>
            <View style={styles.formContainer}>
                <TouchableOpacity
                    onPress={handleEnter}
                    style={[styles.btn, { backgroundColor: colors.primary }]}
                >
                    <Text style={{ color: colors.btnText, fontSize: 20 }}>
                        {t("login.loginButton")}
                    </Text>
                </TouchableOpacity>
            </View>
        </BaseScreens>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 54,
        marginHorizontal: "16%",
        paddingInline: 24,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    formContainer: {
        flex: 0.75,
        gap: "5%",
        justifyContent: "center",
    },
    inputBox: {},
});
