import { colors } from "@/constants/theme"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerBackButtonDisplayMode: "minimal",
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='movie/[id]' options={{ title: "Details" }} />
      </Stack>
    </>
  )
}
