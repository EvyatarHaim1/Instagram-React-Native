import React from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchUser } from '../redux/actions/index';

 function Main() {

    useEffect(() => {
        fetchUser();
    },[])

    return (
        <View style={{ flex:1, justifyContent: 'center'}}>
            <Text> User Is Logged In </Text>
       </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, dispatch});

export default (connect)(mapStateToProps, mapDispatchProps)(Main);