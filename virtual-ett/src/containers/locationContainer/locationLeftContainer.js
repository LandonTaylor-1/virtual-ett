import {connect} from 'react-redux';
import LocationLeft from '../../components/location/locationLeft';
import {setLocationLeft} from '../../actions/index';

const mapDispatchToProps = {
    setLeft: setLocationLeft
}

export default connect(null, mapDispatchToProps)(LocationLeft);