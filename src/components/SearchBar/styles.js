import { StyleSheet } from 'react-native';

import { FontType } from '../../styles/Fonts';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
    containerBox:{
      flex: 3,
      flexDirection: 'row',
      alignItems:'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 16,
        borderRadius: 8,
        color: Colors.black,
      },
      image:{
          width:35,
          height:35
      },
      iconSearch:{
        width: 40,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
      },
      colorInput:{
        color: Colors.black
      }
});
