import React, { FC, ReactElement } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface LoginProps {}

export const Login: FC<LoginProps> = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
});
