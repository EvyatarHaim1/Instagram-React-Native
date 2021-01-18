import { USER_STATE_CHANGE } from '../constans/index';
import { db, auth } from '../../firebase';

export function fetchUser(){

    return(dispatch) => {
        db.collection("users")
        .doc(auth().currentUser.uid) 
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else{
                console.log('does not exist')
            }
        })
    }
}