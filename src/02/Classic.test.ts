import {Store} from "../services/Store";
import {Product} from "../services/Product";
import {Customer} from "../services/Customer";

describe('고전파식 테스트', () => {
    it('purchase_succeeds_when_enough_inventory', async () => {
        const store = new Store()
        await store.addInventory(Product.Shampoo, 10)
        const customer = new Customer()

        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 5)

        // 검증
        expect(success).toBe(true)
        expect(await store.getInventory(Product.Shampoo)).toBe(5)
    })

    it('purchase_fails_when_not_enough_inventory', async () => {
        const store = new Store()
        await store.addInventory(Product.Shampoo, 10)
        const customer = new Customer()

        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 15)

        // 검증
        expect(success).toBe(false)
        expect(await store.getInventory(Product.Shampoo)).toBe(10)
    })
})
