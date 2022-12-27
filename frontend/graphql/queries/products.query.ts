import { gql } from '@apollo/client';
import { Product } from '../../types';

export const PRODUCTS_QUERY = gql`
  query {
    products {
        id
        title
        price
        shop {
            id
            name
        }
        variations {
            id
            color
            size
        }
    }
  }
`;

export interface ProductsData {
    products: Product[];
}