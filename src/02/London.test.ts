import {Store} from "../services/Store";
import {Customer} from "../services/Customer";
import {Product} from "../services/Product";

jest.mock("../services/Store")


describe('런던파식 테스트', () => {
    it('purchase_succeeds_when_enough_inventory', async () => {
        // 준비
        const storeMock = new Store()
        jest.spyOn(Store.prototype, 'hasEnoughInventory').mockReturnValue(true)
        jest.spyOn(Store.prototype, 'removeInventory')
        const customer = new Customer()

        // 실행
        const success = await customer.purchase(storeMock, Product.Shampoo, 5)

        // 검증
        expect(success).toBe(true)
        expect(storeMock.removeInventory).toHaveBeenCalledTimes(1)
    })

    it('purchase_fails_when_not_enough_inventory', async () => {
        // 준비
        const storeMock = new Store()
        jest.spyOn(Store.prototype, 'hasEnoughInventory').mockReturnValue(false)
        jest.spyOn(Store.prototype, 'removeInventory')
        const customer = new Customer()

        // 실행
        const success = await customer.purchase(storeMock, Product.Shampoo, 5)

        // 검증
        expect(success).toBe(false)
        expect(storeMock.removeInventory).toHaveBeenCalledTimes(0)
    })
})
