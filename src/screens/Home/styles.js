import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/Colors';
import { FontType, FontWeight } from '../../styles/Fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkWhite
    },
    contentContainer: {
        flex:1
    },
    topContainer:{
        height:60,
        backgroundColor:Colors.white,
        flexDirection: 'row'
    },
    filterContainer:{
        width:100,
        height: 60,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textFilterName: {
        color: Colors.orange,
        fontFamily: FontType.bold,
        fontWeight: FontWeight.bold
    },
    dropdownIcon:{
        width: 30,
        height: 20
    }
});
