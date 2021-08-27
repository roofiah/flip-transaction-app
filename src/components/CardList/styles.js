import { StyleSheet } from 'react-native';
import { FontType, FontWeight } from '../../styles/Fonts';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
    CardStyle: {
        height: 'auto',
        paddingLeft:10,
        paddingRight: 10,
        paddingTop: 10
    },
    cardContainer: {
        flexDirection: 'row',
        borderRadius:10,
        overflow:'hidden'
    },
    cardLeftContainerGreen:{
        width:10,
        backgroundColor: Colors.primary
    },
    cardLeftContainerRed:{
        width:10,
        backgroundColor: Colors.orange
    },
    cardCenterContainer:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:20,
        padding:10,
        backgroundColor:Colors.white
    },
    cardRightContainer:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor:Colors.white,
        paddingRight:10
    },
    
    buttonSuccess:{
        height:30,
        width:80,
        backgroundColor:Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',  
    },
    buttonChecking:{
        height:35,
        width: 85,
        borderColor: Colors.orange,
        borderWidth : 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    textButtonSuccess:{
        color:Colors.white,
        fontSize: 14,
        fontFamily: FontType.bold,
    },
    textButtonChecking:{
        fontSize: 13,
        fontFamily: FontType.bold,
    },
    titleContainer:{
        flexDirection: 'row' 
    },
    textTitle:{
        fontSize: 16,
        fontFamily: FontType.bold,
        fontWeight: FontWeight.bold
    },
    DetContainer:{
        flexDirection: 'row' 
    },
    textName: {
        fontSize: 16,
        fontFamily: FontType.semiBold,
    },
    bulletIcon: {
        width: 6,
        height: 6,
        backgroundColor: Colors.black,
        borderRadius: 3,
        marginTop: 8,
        marginLeft: 3,
        marginRight: 3
    },
    rightArrow: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 4
    },
    iconRightArrow: {
        width: 14,
        height: 14
    }
});
