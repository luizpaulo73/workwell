import { Tabs } from "expo-router";
import React from "react";
import { Home, Activity, Brain, User } from "lucide-react-native";

const tabs = [
    { name: "home", label: "Home", icon: Home },
    { name: "activities", label: "Atividades", icon: Activity },
    { name: "support", label: "Apoio", icon: Brain },
    { name: "profile", label: "Perfil", icon: User },
];

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "#E5E7EB",
                },
                tabBarActiveTintColor: "#2563EB",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            {tabs.map((t) => (
                <Tabs.Screen
                    key={t.name}
                    name={t.name}
                    options={{
                        title: t.label,
                        tabBarIcon: ({ color, focused }) => (
                            <t.icon
                                size={22}
                                color={color}
                                strokeWidth={focused ? 2.5 : 2}
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
