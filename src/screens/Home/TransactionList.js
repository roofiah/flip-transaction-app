import React, {Component, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Image} from 'react-native';
import styles from './styles';
import { CardList,SearchBar, ModalOrder, Loader } from "../../components/index";
import {valueSort} from '../../utils/Filter'
import { fetchingTransaction } from '../../actions/TransactionListAction';
import { connect } from 'react-redux';

class TransactionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            modalVisible: false,
            setModalVisible: false
        }
        this._onRefresh = this._onRefresh.bind(this);
    }

    componentDidMount() {
        this._fetchData();
        this.setState({ refreshing: false });
    }

    _onRefresh(){
        this._fetchData();
        this.setState({ refreshing: false });
    }

    _fetchData = async () => {
        await this.props.fetchingTransaction();
    }

    navigateDetail = (dataDetail) => {
        this.props.navigation.navigate("TransactionDetail", { dataDetail});
    }
    

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.contentContainer}>
                <CardList
                    key={index}
                    senderBank = {item?.sender_bank}
                    beneficiaryBank = {item?.beneficiary_bank}
                    beneficiaryName ={item?.beneficiary_name}
                    amount ={item?.amount}
                    createdAt ={item?.created_at}
                    status ={item?.status}
                    onPress={() => this.navigateDetail(item)}
                />
            </View>
        )
    }
    openModal(){
        this.setState({ modalVisible: true})
    }

    render() {
        const data = this.props.transactionList;
        return this.props.transactionList.loading 
                ? ( <Loader loading={this.props.transactionList.loading} /> )
                : (
                    <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <SearchBar {...this.props}/>
                            <TouchableOpacity 
                                style={styles.filterContainer}
                                onPress={() => {
                                   this.openModal()
                                  }}
                            >
                                <View style={styles.textFilterContainer}>
                                <Text style={styles.textFilterName}>{valueSort(data.valInput)}</Text>
                                </View>
                                <View style={styles.imageFilterContainer}>
                                <Image source={require('../../assets/images/dropdown.jpg')} style={styles.dropdownIcon}/>
                                </View>
                               
                                <ModalOrder 
                                {...this.props}
                                isModalVisible={this.state.modalVisible} 
                                setModalVisible={()=>{this.setState({modalVisible:!this.state.modalVisible})}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentContainer}>
                            <FlatList
                                data={this.props.transactionList.data}
                                renderItem={this.renderItem}
                                keyExtractor={item => `${item.id}`}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                            />
                        </View>
                    </View>
                );
    }
}

function mapStateToProps(state, props) {
    return {
        transactionList: state.transactionList,
    };
}

export default connect(mapStateToProps, { fetchingTransaction })(TransactionList);
