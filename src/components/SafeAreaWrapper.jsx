import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'

const SafeAreaWrapper = ({children}) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });

export default SafeAreaWrapper