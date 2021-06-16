import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { merchantName } from '../actions/merchantActions'
import { useMerchant } from '../context/merchantContext'

function MerchantForm(props) {
    const [form, setForm] = useState({});
    let {currentMerchant, setCurrentMerchant} = useMerchant(); 
    const {saveMerchant} = useMerchant();

    useEffect(() => {
        if ((currentMerchant !== null ) && (currentMerchant !== undefined)) {
            setForm(currentMerchant);
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        if (name === "name") {props.setName(updateData)}
    }

    function saveFormMerchant(event) {
        event.preventDefault();
        props.setName(form.name);
        setCurrentMerchant(form);
        saveMerchant(form);
    }

    return (
        <div id="merchant-form" onSubmit={saveFormMerchant}>
            {form && <label>Merchant Name
                <input name="name" type="text" value={form.name} onChange={handleChange} />
            </label>}
        </div> 
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {merchantName})(MerchantForm)
