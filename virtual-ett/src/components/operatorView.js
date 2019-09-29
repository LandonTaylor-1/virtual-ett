import React from 'react';
import ColorLeft from '../containers/colorContainer/colorLeftContainer';
import ColorRight from '../containers/colorContainer/colorRightContainer';
import LocationLeft from '../containers/locationContainer/locationLeftContainer';
import LocationRight from '../containers/locationContainer/locationRightContainer';
import ClientViewLeft from '../containers/clientViewContainer/clientViewLeftContainer';
import ClientViewRight from '../containers/clientViewContainer/clientViewRightContainer';
import Session from './session';
import './operatorView.css';

function OperatorView(props) {
    return(
        <div id="operatorView">
            <div className="operator-flex">
                <div className="operator-flex">
                    <ColorLeft />
                    <LocationLeft />
                </div>
                <div className="operator-flex">
                    <ColorRight />
                    <LocationRight />
                </div>
            </div>
            <div className="operator-flex">
                <ClientViewLeft display={props.display}/>
                <ClientViewRight display={props.display}/>
            </div>
            <Session />
        </div>
    )
}

export default OperatorView;