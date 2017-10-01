/**
 * author/ eeshiken
 * created/ 30 SEP 2017
 */

import React from 'react';

function View(props) {
    return  (
        <div id={props.id} className="views">
            {props.children}
        </div>
    );
}

export default View