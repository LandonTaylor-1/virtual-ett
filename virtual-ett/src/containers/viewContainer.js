import {connect} from 'react-redux';
import View from '../components/view';
import {setClient} from '../actions/index'

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

const mapDispatchToProps = {
    setClient: setClient
}

export default connect(mapStateToProps, mapDispatchToProps)(View);