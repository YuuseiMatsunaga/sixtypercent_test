import '@shopify/polaris/build/esm/styles.css';
import { AppProvider, Page, DataTable, Card } from '@shopify/polaris';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY, ProductsData } from '../graphql/queries/products.query';
import { Product } from '../types';

function renderTable() {
  const rows = getProducts()

  return (
    <AppProvider i18n={{}}>
      <Page title="Products">
        <Card>
          <DataTable
            columnContentTypes={[
              'numeric',
              'text',
              'numeric',
              'text',
              'text',
              'text',
            ]}
            headings={[
              'Id',
              'Title',
              'Price',
              'Size Variation',
              'Color Variation',
              'Shop'
            ]}
            rows={rows}
          />
        </Card>
      </Page>
    </AppProvider>
  );
}

function getProducts(): any[] {
  const { error, data } = useQuery<ProductsData>(PRODUCTS_QUERY)
  if (error) alert('error')

  const products = data?.products
  if (!products) return []

  return products.map((product: Product) => {
    return [
      product.id,
      product.title,
      product.price,
      processing_variations(product.variations, 'size'),
      processing_variations(product.variations, 'color'),
      product.shop.name
    ]
  })
}

function processing_variations(variations: any, key: string) {
  const vals = variations.map((variation: any) => variation[key])
  const no_deplicate_vals = Array.from(new Set(vals));
  return no_deplicate_vals.join(', ');
}

export default renderTable