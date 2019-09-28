import {connect} from 'react-redux';
import ColorRight from '../../components/color/colorRight';
import {setColorRight} from '../../actions/index';

const mapDispatchToProps = {
    setRight: setColorRight
}

export default connect(null, mapDispatchToProps)(ColorRight);