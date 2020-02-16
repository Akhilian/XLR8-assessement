import React, { Fragment } from 'react';

const SwipeIcon = () => (
    <Fragment>
        <div className="swipe-icon">
            <div>
                <img src="swipe.svg" width="30px" alt="" />
            </div>
            {/* <div className="swipe-explaination">
                <p>Swiper à gauche ou droite.</p>
                <p>Les flèches du clavier sont également disponibles.</p>
            </div> */}
        </div>
    </Fragment>
);

export default SwipeIcon