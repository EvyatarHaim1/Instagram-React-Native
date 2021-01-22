import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { connect } from 'react-redux';
import Feed from './main/Feed';
import Profile from './main/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return null;
}

 function Main(props) {

    useEffect(() => {
        props.fetchUser();
    },[])

    return (
      <Tab.Navigator initialRouteName="Feed" labeled={false}>
         <Tab.Screen name="Feed" component={Feed} 
           options={{
                tabBarIcon:({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
         ),
         }} />
         <Tab.Screen name="AddContainer" component={EmptyScreen} 
           listeners={({ navigation }) => ({
               tabPress: event => {
                event.preventDefault();
               navigation.navigate("Add")
               }
           }) 
        }
           options={{
                tabBarIcon:({ color, size }) => (
                <MaterialCommunityIcons name="plus-box" color={color} size={26} />
         ),
         }} />
          <Tab.Screen name="Profile" component={Profile} 
           options={{
                tabBarIcon:({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
         ),
         }} />
      </Tab.Navigator>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
