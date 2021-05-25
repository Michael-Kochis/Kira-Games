import React, { useEffect, useState } from 'react'
import { useMerchant } from '../context/merchantContext'

function MerchantForm() {
    const initialValues = {
        game: "Repair Merchant",
        XP: 0,
        honor: 100,
        coins: {gold: 0, silver: 0, copper: 0, tin: 0},
        debentures: {gold: 0, silver: 0, copper: 0, tin: 0},
        skills: {leather:3, lumber: 3, smith: 3},
        story: {}
    }
    const [form, setForm] = useState(initialValues);
    let {currentMerchant, setCurrentMerchant} = useMerchant(); 
    const {saveMerchant} = useMerchant();

    useEffect(() => {
        if ((currentMerchant !== null ) && (currentMerchant !== undefined)) {
            setForm(currentMerchant);
        } else {
            setForm(initialValues);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        console.log(form); 
    }

    function saveFormMerchant(event) {
        event.preventDefault();
        setCurrentMerchant(form);
        saveMerchant();
    }

    return (
        <div id="merchant-form" onSubmit={saveFormMerchant}>
            {form && <label>Merchant Name
                <input name="name" type="text" value={form.name} onChange={handleChange} />
            </label>}
        </div> 
    )
}

export {
    MerchantForm
}
