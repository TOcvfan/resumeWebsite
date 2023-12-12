import React from "react";
import { kaushan } from "$/fonts";
import { Title } from "$/Components";

const Mere = ({ lan }) => {

    return (
        <div>
            <Title className={kaushan.className} color='Blue' size={25}>{lan === 'Dk' ? 'Tryk på knapperne for at se mere' : 'Press the buttons to see more'}</Title>
        </div>
    );
}

export default Mere;