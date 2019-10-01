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
            <div id="title">Virtual Emulation - Emotional Transformation Therapy</div>
            <div className="operator-flex-topist">
                <div className="operator-flex-top">
                    <div className="pad">
                        <ColorLeft />
                    </div>
                    <div className="pad">
                        <LocationLeft />
                    </div>
                </div>
                <div className="operator-flex-top">
                    <div className="pad">
                        <ColorRight />
                    </div>
                    <div className="pad">
                        <LocationRight />
                    </div>
                </div>
            </div>
            <div className="operator-flex">
                <div className="dial">
                    <ClientViewLeft display={props.display}/>
                </div>
                <div className="dial">
                    <ClientViewRight display={props.display}/>
                </div>
            </div>
            <Session />
        </div>
    )
}

export default OperatorView;