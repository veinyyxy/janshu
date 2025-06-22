import axios from 'axios'

const doLogin = (account, password) => {
    return (dispatch) => {
        var request = 'http://localhost:5223/TestServices/DoLogin?username=' 
            + account + '&password='
            + password;
        //console.log(request);
        axios.get(request)
            .then(
                (res) => {
                    var action = {
                        type:'DO_LOGIN',
                        value: true
                    }
                    if(res.data.isSuccess)
                    {
                        dispatch(action);
                    }
                    else
                    {
                        action.value = false;
                        dispatch(action);
                    }
                }
            )
    }
}

const doLogout = (account) => {
    return (dispatch) => {
        var action = {
            type:'DO_LOGOUT',
            value: account
        }
        dispatch(action);
    }
}
export {doLogin, doLogout};