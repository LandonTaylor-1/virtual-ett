import {connect} from 'react-redux';
import ClientViewRight from '../../components/clientView/clientViewRight/clientViewRight';

function mapStateToProps(state) {
    return {
        pesViewRight: state.pesViewRight,
        locationRight: state.locationRight,
        colorRight: state.colorRight,
        client: state.client
    }
}

export default connect(mapStateToProps)(ClientViewRight);