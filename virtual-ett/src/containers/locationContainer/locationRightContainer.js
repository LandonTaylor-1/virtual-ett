import {connect} from 'react-redux';
import LocationRight from '../../components/location/locationRight';
import {setLocationRight} from '../../actions/index';

const mapDispatchToProps = {
    setRight: setLocationRight
}

export default connect(null, mapDispatchToProps)(LocationRight)