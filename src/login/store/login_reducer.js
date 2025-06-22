import { fromJS} from 'immutable';


const defaultState = fromJS(
    {
        isLogin: false
    }
);

const login_reducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'DO_LOGIN':
            return state.set('isLogin', fromJS(action.value));
        case 'DO_LOGOUT':
            return state.set('isLogin', false);
        default:
            return state;
    }
}

export default login_reducer;