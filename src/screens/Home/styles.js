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
        flex: 1.3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8,
        
    },
    textFilterContainer:{
        width: '80%',
        alignItems: 'flex-end'
    },
    imageFilterContainer:{
        width: '20%',
        alignItems: 'flex-start',
    },
    textFilterName: {
        color: Colors.orange,
        fontFamily: FontType.bold,
        fontWeight: FontWeight.bold,
    },
    dropdownIcon:{
        width: 30,
        height: 20,
    },

});
