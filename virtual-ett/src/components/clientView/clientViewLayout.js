import React from 'react';
import ClientViewLeft from '../../containers/clientViewContainer/clientViewLeftContainer';
import ClientViewRight from '../../containers/clientViewContainer/clientViewRightContainer';
import './clientViewLayout.css';

function ClientViewLayout(props) {
    return(
        <div id="go">
            <ClientViewLeft /><ClientViewRight />
        </div>
    )
}

export default ClientViewLayout;