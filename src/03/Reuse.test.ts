import {Store} from "../services/Store";
import {Product} from "../services/Product";
import {Customer} from "../services/Customer";

describe('[안티 패턴] SUT 생성 초기화 코드 추출',  () => {
    let store: Store, customer: Customer
    beforeEach(async () => {
        store = new Store()
        customer = new Customer()
        await store.addInventory(Product.Shampoo, 10)
    })


    it('purchase_succeeds_when_enough_inventory', async () => {
        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 5)

        // 검증
        expect(success).toBe(true)
        expect(await store.getInventory(Product.Shampoo)).toBe(5)
    })

    it('purchase_fails_when_not_enough_inventory', async () => {
        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 15)

        // 검증
        expect(success).toBe(false)
        expect(await store.getInventory(Product.Shampoo)).toBe(10)
    })
})

describe('[더 나은 패턴] SUT 생성 초기화 코드 추출',  () => {
    const createStoreWithInventory = async (productKind: Product, stock: number): Promise<Store> => {
        const store = new Store()
        await store.addInventory(Product.Shampoo, 10)
        return store
    }

    const createCustomer = (): Customer => {
        return new Customer()
    }

    it('purchase_succeeds_when_enough_inventory', async () => {
        //쥰비
        const store = await createStoreWithInventory(Product.Shampoo, 10)
        const customer = createCustomer()

        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 5)

        // 검증
        expect(success).toBe(true)
        expect(await store.getInventory(Product.Shampoo)).toBe(5)
    })

    it('purchase_fails_when_not_enough_inventory', async () => {
        //쥰비
        const store = await createStoreWithInventory(Product.Shampoo, 10)
        const customer = createCustomer()

        // 실행
        const success = await customer.purchase(store, Product.Shampoo, 15)

        // 검증
        expect(success).toBe(false)
        expect(await store.getInventory(Product.Shampoo)).toBe(10)
    })
})
