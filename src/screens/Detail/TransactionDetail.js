import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { FormatCurrency, FormatDate } from '../../utils/Format';

class TransactionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true
        }
    }

    navigateList = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { dataDetail } = this.props.navigation.state.params;
        console.log('ini data transaksi detail', dataDetail)
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textTitle}>ID TRANSAKSI:#{dataDetail.id}</Text>
                        <Image source={require('../../assets/images/copy.png')} style={styles.iconCopy}/>
                    </View>
                    <View style={styles.midleContainer}>
                        <View>
                            <Text style={styles.textTitle}>DETAIL TRANSAKSI</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.navigateList()}>
                            <Text style={styles.textButton}>Tutup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.desContainer}>
                        <View style={styles.titleDesContainer}>
                            <Text style={styles.textTitle}>{dataDetail.sender_bank.toUpperCase() }</Text>
                            <View style={styles.rightArrow}>
                                <Image 
                                    source={require('../../assets/images/right_arrow.png')} 
                                    style={styles.iconRightArrow}
                                />
                            </View>
                            <Text style={styles.textTitle}>{dataDetail.beneficiary_bank.toUpperCase() }</Text>
                        </View>
                        <View style={styles.contentDesContainer}>
                            <View style={styles.leftBox}>
                                <Text style={styles.textTitleDes}>
                                    {dataDetail.status == 'SUCCESS' ? dataDetail.beneficiary_name.toUpperCase() : '- '+dataDetail.beneficiary_name.toUpperCase() }
                                </Text>
                                <Text>{dataDetail.account_number}</Text>
                            </View>
                            <View style={styles.rightBox}>
                                <Text style={styles.textTitleDes}>NOMINAL</Text>
                                <Text>{FormatCurrency(dataDetail.amount)}</Text>
                            </View>
                        </View>
                        <View style={styles.contentDesContainer}>
                            <View style={styles.leftBox}>
                                <Text style={styles.textTitleDes}>BERITA TRANSFER</Text>
                                <Text>{dataDetail.remark}</Text>
                            </View>
                            <View style={styles.rightBox}>
                                <Text style={styles.textTitleDes}>KODE UNIK</Text>
                                <Text>{dataDetail.unique_code}</Text>
                            </View>
                        </View>
                        <View style={styles.contentDesContainer}>
                            <View>
                                <Text style={styles.textTitleDes}>WAKTU DIBUAT</Text>
                                <Text>{FormatDate(dataDetail.created_at)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )

    }
}

export default TransactionDetail
