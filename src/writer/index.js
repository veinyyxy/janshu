import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import WarningDialog from './warningDialog';

const Writer = () => {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(true);
    const isLogin = useSelector(state => state.getIn(['login', 'isLogin']));
    const navigate = useNavigate();

    if(!isLogin)
    {
        //setShowModal(true);
        return <WarningDialog visible={showModal} onClose={() => {
            setShowModal(false);
            navigate('/');
        }} />;//<Navigate to = '/'></Navigate>
    }
       

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You wrote: ${text}`);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Write something..."
                rows={5}
                style={{ width: '100%' }}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

const mapStateToProps = (state)=>{
    return ({
        isLogin : state.getIn(["login","isLogin"])
    });
}

export default connect(mapStateToProps, null)(Writer);