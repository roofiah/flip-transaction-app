import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/Colors';
import { FontType, FontWeight } from '../../styles/Fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkWhite,
    },
    contentContainer: {
        height: '70%',
        backgroundColor:Colors.white,
        marginTop: 20
    },

    //contentDetail
    headerContainer:{
        height:80,
        padding:20,
        backgroundColor:Colors.white,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    midleContainer:{
        height:80,
        padding:20,
        backgroundColor:Colors.white,
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        borderTopColor:Colors.lightGrey,
        borderBottomColor:Colors.lightGrey,
        borderTopWidth:2,
        borderBottomWidth:2
    },
    textTitle:{
        fontSize: 18,
        fontFamily: FontType.bold,
        fontWeight: FontWeight.bold
    },
    textButton:{
        fontSize: 18,
        fontFamily: FontType.bold,
        color: Colors.orange
    },
    desContainer:{
        padding:20
    },
    titleDesContainer:{
        flexDirection: 'row'
    },
    contentDesContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textTitleDes:{
        fontSize: 15,
        fontFamily: FontType.bold,
        fontWeight: FontWeight.bold
    },
    rightArrow: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 4
    },
    iconRightArrow: {
        width: 14,
        height: 14
    },
    iconCopy: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    leftBox:{
        flex: 2.5,
        justifyContent: 'flex-start',
        paddingRight: 20
    },
    rightBox: {
        flex: 1.5,
        justifyContent: 'flex-start'
    }
});
