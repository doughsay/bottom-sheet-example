import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            title="Present Modal"
            onPress={() => bottomSheetRef.current?.present()}
          />
          <BottomSheetModal
            ref={bottomSheetRef}
            detached={true}
            bottomInset={46}
            style={styles.sheetContainer}
          >
            <BottomSheetView>
              <View style={styles.contentContainer}>
                <Text>Bottom</Text>
                <Text>Sheet</Text>
                <Text>Modal</Text>
                <Text>🎉</Text>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "grey",
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});

export default App;
