import { gql } from '@apollo/client';
import { Shop } from '../../types';

export const SHOPS_QUERY = gql`
  query {
    shops {
        id
        name
    }
  }
`;

export interface ShopsData {
    shops: Shop[];
}