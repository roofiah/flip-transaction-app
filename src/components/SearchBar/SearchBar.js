import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { searchByValue } from '../../actions/TransactionListAction'

import styles from "./styles";
import { Colors } from '../../styles/Colors';
import { connect } from 'react-redux';

class SearchBar extends Component {
    searchByInput(searchInput){
        this.props.dispatch(searchByValue({searchInput}))
    }

    render() {
        return (
            <View style={styles.containerBox}>
                <View style={styles.iconSearch}>
                    <Image source={require('../../assets/images/search_icon.png')} style={styles.image}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        maxLength = {30} 
                        autoCapitalize='none'
                        placeholder='Cari nama, bank, atau nominal'
                        onChangeText={e => this.searchByInput(e)}
                    />
                </View>
            </View>   
        );
    }
};


function mapStateToProps(state) {
    return {state};
  }
  
  export default connect(mapStateToProps)(SearchBar);
