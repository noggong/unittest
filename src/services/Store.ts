import {Product} from "./Product";

export class Store {
    private products = [
        { kind: Product.Shampoo, stock: 0 }
    ]

    public async addInventory(productKind: Product, stock: number) {
        const product = this.getProduct(productKind)
        product.stock = product.stock + stock
    }

    public async removeInventory(productKind: Product, quantity: number) {
        const product = this.getProduct(productKind)
        product.stock = product.stock - quantity
    }

    public async getInventory(productKind: Product): Promise<number> {
        const product = this.getProduct(productKind)
        return product.stock
    }

    public hasEnoughInventory(productKind: Product, quantity: number) {
        const product = this.getProduct(productKind)
        return product.stock >= quantity
    }

    private getProduct(productKind: Product) {
        const product = this.products.find((product) => product.kind === productKind)
        if (!product) throw new Error('상품 찾을 수 없음')
        return product
    }


}
