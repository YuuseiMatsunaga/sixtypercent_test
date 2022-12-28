import DownloadCsvComponent from '../../components/download_csv_component';
import ShopSelectComponent from '../../components/shop_select_component'
import { AppProvider } from '@shopify/polaris';
import { OrdersData, ORDERS_QUERY } from '../../graphql/queries/orders.query';
import { useQuery } from '@apollo/client';
import { Order } from '../../types';

function getOrderData(shop_id: number, from?: string, to?: string) {
    const { error, data } = useQuery<OrdersData>(ORDERS_QUERY, {
        variables: {
            shop_id: 1,
        }
    })
    if (error) alert(error.message)

    const orders = data?.orders
    if (!orders) return []

    return orders.map((order: Order) => {
        return {
            order_id: order.id,
            order_date: order.created_at,
            user_id: order.user.id,
            user_name: order.user.name,
            email: order.user.email,
            sum_quantity: order.order_carts.reduce((sum, element) => sum + element.quantity, 0),
            sum_price: order.order_carts.reduce((sum, element) => sum + element.variation.product.price, 0)
        }
    })
}

function RenderAppProvider() {
    return (
        <AppProvider i18n={{}}>
            <ShopSelectComponent />
            <DownloadCsvComponent data={getOrderData(1)} />
        </AppProvider>
    )
}

export default RenderAppProvider;