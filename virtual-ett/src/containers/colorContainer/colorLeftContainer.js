import {connect} from 'react-redux';
import ColorLeft from '../../components/color/colorLeft';
import {setColorLeft} from '../../actions/index';

const mapDispatchToProps = {
    setLeft: setColorLeft
}

export default connect(null, mapDispatchToProps)(ColorLeft);