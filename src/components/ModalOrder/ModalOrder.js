// --- Component Modal Filter --->
import React, { Component } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import { sortByAsc, sortByDesc, sortByNewDate, sortByOldDate } from '../../actions/TransactionListAction'
import styles from "./styles";
import { connect } from 'react-redux';

class ModalOrder extends Component {
  constructor(props) {
    super(props);
    const {
      isModalVisible, setModalVisible
    } = props;
    this.state = {
      value: null,
      PROP : [
        {
          key: 'urutkan',
          text: 'URUTKAN',
        },{
          key: 'asc',
          text: 'Nama A - Z',
        },{
          key: 'desc',
          text: 'Nama Z - A',
        },{
          key: 'newDate',
          text: 'Tanggal Terbaru',
        },{
          key: 'oldDate',
          text: 'Tanggal Terlama',
        },
      ]
    }
  }

  sortInputBy(valInput, dataArr){
    if (valInput == 'asc'){
      this.props.dispatch(sortByAsc({valInput, dataArr}))
    }else if (valInput == 'desc'){
      this.props.dispatch(sortByDesc({valInput, dataArr}))
    }else if (valInput == 'newDate'){
      this.props.dispatch(sortByNewDate({valInput, dataArr}))
    }else if (valInput == 'oldDate'){
      this.props.dispatch(sortByOldDate({valInput, dataArr}))
    }else{
      this.props.dispatch(sortByNewDate({valInput, dataArr}))
    }
    
    this.setState({value: valInput });
  }

  render() {
    const {isModalVisible, setModalVisible, transactionList}= this.props
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            {this.state.PROP.map(res => {
            return (
              <View key={res.key} style={styles.containerRadio}>
                <TouchableOpacity
                  style={styles.containerListFilter}
                  onPress={() => {
                    this.sortInputBy(res.key, transactionList.data)
                    setModalVisible(false)
                  }}>
                    <View style={styles.radioCircle}>
                      {transactionList.valInput === res.key && <View style={styles.selectedRb} />}
                    </View>
                    <Text style={styles.radioText}>{res.text}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
            </View>
          </View>
        </Modal>
      
      </View>
    );
  };
}

function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(ModalOrder);

