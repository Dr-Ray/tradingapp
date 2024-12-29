import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const InputField = ({}) => {
  const [searchText, setSearchText] = useState('');
    return (
      <View 
        style={{
          flexDirection:"row", 
          height:60,
          paddingTop:20,
          paddingBottom:20,
          paddingLeft:20,
          paddingRight:20,
          borderRadius:25,
          alignItems:"center",
          backgroundColor:"#141414",
        }}>
          <Text>
              <Ionicons name='search' color={"#fff"} size={20}/>
          </Text>
        <TextInput 
          style={{     
              width:"100%", 
              borderRadius:25, 
              backgroundColor:"#141414",
              height:50,
              lineHeight:1,
              paddingTop:10,
              paddingBottom:10,
              paddingLeft:20,
              paddingRight:20,
              color:"#fff",
              width:"100%",
  
          }} 
          placeholder='Find Stock'
          placeholderTextColor={"#fff"}
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
          
      </View>
    )
}

export default InputField

const styles = StyleSheet.create({})