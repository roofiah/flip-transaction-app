import { StyleSheet } from 'react-native';

import { FontType, FontWeight } from '../../styles/Fonts';
import { Colors } from '../../styles/Colors';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

      // --- RADIO BUTTON ---//
      containerRadio: {
        marginBottom: 35,
        flexDirection: 'row',
      },
      radioText: {
        marginRight: 35,
        fontSize: 20,
        color: Colors.black,
        fontWeight: FontWeight.semiBold,
        marginLeft: 15
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: Colors.orange,
      },
      result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
      },
      overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
      },
      containerListFilter: {
        flexDirection: 'row'
      }
});
