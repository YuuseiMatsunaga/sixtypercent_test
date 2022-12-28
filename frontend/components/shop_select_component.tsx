import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { SHOPS_QUERY, ShopsData } from '../graphql/queries/shops.query';
import { useQuery } from '@apollo/client';
import { Shop } from '../types';


function getOptions(): any[] {
    const { error, data } = useQuery<ShopsData>(SHOPS_QUERY)
    if (error) alert('error')

    const shops = data?.shops
    if (!shops) return []

    const options = shops.map((shop: Shop) => {
        return { label: shop.name, value: shop.id }
    })

    return options
}


function SelectExample() {
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value: any) => { setSelected(value) }, []);

    const options = getOptions()

    return (
        <Select
            label="ショップを選択してください"
            options={options}
            onChange={handleSelectChange}
            value={selected}
        />
    );
}

export default SelectExample;