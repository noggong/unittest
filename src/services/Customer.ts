import {Store} from "./Store";
import {Product} from "./Product";


export class Customer {
    public async purchase(store: Store, productKind: Product, quantity: number): Promise<boolean> {
        try {
            if (!store.hasEnoughInventory(productKind, quantity)) {
                throw new Error('상품이 충분하지 않음')
            }
            await store.removeInventory(productKind, quantity)
        } catch {
            return false
        }
        return true
    }
}
