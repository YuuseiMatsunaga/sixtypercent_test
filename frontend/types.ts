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
    product: Product
}

export interface OrderCart {
    id?: number
    quantity: number
    variation: Variation
}

export interface User {
    id: number
    name: string
    email: string
}

export interface Order {
    id: number
    user: User
    created_at: string
    order_carts: OrderCart[]
}