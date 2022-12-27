import { gql } from '@apollo/client';
import { Order } from '../../types';

export const ORDERS_QUERY = gql`
  query Orders($shopId: Int, $from: String, $to: String) {
    orders(shopId: $shopId, from: $from, to: $to) {
        id
        createdAt
        user {
            id
            name
            email
        }
        orderCarts {
            quantity
            variation {
                size
                color
                product {
                    title
                    price
                    shop {
                        name
                    }
                }
            }
        }
    }
  }
`;

export interface OrdersData {
    orders: Order[];
}