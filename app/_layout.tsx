import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    
  })

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
