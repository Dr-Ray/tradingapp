import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoadingWidget = () => {
  return (
    <SafeAreaView
            style={{
              backgroundColor: "#090909",
              height: "100%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size={"large"} />
          </SafeAreaView>
  )
}

export default LoadingWidget

const styles = StyleSheet.create({})