// import { Image, StyleSheet, View } from 'react-native'
// import React, { useState } from 'react'
// import NewButton from '../../components/newBtn';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import * as ImagePicker from 'expo-image-picker';

// const UpdateProfilePhoto = () => {
//     const [selectedImage, setSelectedImage] = useState('');
//     const pickImageAsync = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ['images'],
//           allowsEditing: true,
//           quality: 1,
//         });
    
//         if (!result.canceled) {
//           setSelectedImage(result.assets[0].uri);
//         } else {
//           alert('You did not select any image.');
//         }
//       };
    
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.imageContainer}>
//                 <Image source={selectedImage === ''?require('../../../assets/background-image.png'):{uri:selectedImage}} style={styles.image} />
//             </View>
//             <View style={styles.footerContainer}>
//                 <NewButton theme="primary" label="Choose a photo" onPress={pickImageAsync} />
//                 <NewButton label="Use this photo"/>
//             </View>
//         </SafeAreaView>
//     );
// }

// export default UpdateProfilePhoto

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#0F0F0F',
//         alignItems: 'center',
//     },
//     imageContainer: {
//         flex: 1,
//         marginTop:20
//     },
//     footerContainer: {
//         flex: 1 / 3,
//         alignItems: 'center',
//     },
//     image: {
//         width: 320,
//         height: 440,
//         borderRadius: 18,
//     },
// });