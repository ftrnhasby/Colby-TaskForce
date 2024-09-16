import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily:'outfit-bold', fontSize:30 }}>Welcome to Colby app</Text>
    </View>
  );
}
