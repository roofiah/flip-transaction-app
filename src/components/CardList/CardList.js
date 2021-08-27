// --- Component Card List Transaction--->
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FormatCurrency, FormatDate } from '../../utils/Format';
import styles from "./styles";

const CardList = props => {
    const {
        onPress,
        senderBank,
        beneficiaryBank,
        beneficiaryName,
        amount,
        createdAt,
        status
    } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.CardStyle}>
                <View style={styles.cardContainer}>
                    <View style={status == 'SUCCESS' ? styles.cardLeftContainerGreen : styles.cardLeftContainerRed }/>
                    <View style={styles.cardCenterContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.textTitle}>{senderBank ? senderBank.toUpperCase(): '-'}</Text>
                            <View style={styles.rightArrow}>
                                <Image 
                                    source={require('../../assets/images/right_arrow.png')} 
                                    style={styles.iconRightArrow}
                                />
                            </View>
                            <Text style={styles.textTitle}>
                                {beneficiaryBank ? beneficiaryBank.toUpperCase() : '-' }
                            </Text>
                        </View>
                        <Text style={styles.textName}>
                            {beneficiaryName ? beneficiaryName.toUpperCase(): '-'}
                        </Text>
                        <View style={styles.DetContainer}>
                            <Text>{amount ? FormatCurrency(amount) : '-'}</Text>
                            <Text style={styles.bulletIcon}></Text>
                            <Text>{createdAt ? FormatDate(createdAt) : '-'}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.cardRightContainer}>
                    {status == 'SUCCESS' ?
                        <View style={styles.buttonSuccess}>
                            <Text style={styles.textButtonSuccess}>Berhasil</Text>
                        </View>
                    :
                        <View style={styles.buttonChecking}>
                            <Text style={styles.textButtonChecking}>Pengecekan</Text>
                        </View>
                    }
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardList;
