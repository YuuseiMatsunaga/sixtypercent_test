export interface Product {
    id: number
    title: string
    price: number
    shop_id: number
    shop: Shop
    variations: Variation[]
}

export interface Shop {
    id: number
    name: string
}

export interface Variation {
    id: number
    product_id: number
    color: string
    size: string
}