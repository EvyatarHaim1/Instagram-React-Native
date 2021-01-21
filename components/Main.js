import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import { connect } from 'react-redux';

 function Main(props) {

    useEffect(() => {
        props.fetchUser();
    },[])

    const { currentUser } = props;

    return (
        <View style={{ flex:1, justifyContent: 'center'}}>
            <Text> {currentUser?.name} User Is Logged In </Text>
       </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
