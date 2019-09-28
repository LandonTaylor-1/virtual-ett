import {connect} from 'react-redux';
import ClientViewLeft from '../../components/clientView/clientViewLeft/clientViewLeft';

function mapStateToProps(state) {
    return {
        pesViewLeft: state.pesViewLeft,
        locationLeft: state.locationLeft,
        colorLeft: state.colorLeft,
        client: state.client
    }
}

export default connect(mapStateToProps)(ClientViewLeft);