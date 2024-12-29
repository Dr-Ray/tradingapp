import { StyleSheet } from 'react-native';

const myStylesheet = StyleSheet.create({
    textBold:{
        fontWeight:"bold"
    },
    hrRow:{
        flexDirection:"row",
        alignItems:"center"
    },
    row:{
        flexDirection:"row"
    },
    justifyBetween:{
        justifyContent:"space-between"
    },
    justifyAround:{
        justifyContent:"space-around"
    },
    justifyCenter:{
        justifyContent:"center"
    },
    justifyEven:{
        justifyContent:"space-evenly"
    },
    pX2:{
        paddingLeft:20,
        paddingRight:20,
    },
    pX1:{
        
        paddingLeft:10,
        paddingRight:10,
    }, 
    pY1:{
        paddingTop:10,
        paddingBottom:10
    },
    pY2:{
        paddingTop:20,
        paddingBottom:20,
    },
    wFull:{
        width:"100%"
    }
});

export default myStylesheet