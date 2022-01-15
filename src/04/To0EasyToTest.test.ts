import {Product} from "../services/Product";

class UserRepository {

    // 비공개 속성 '종(Species)'
    private _lastExecutedSqlStatement: string = ''

    get lastExecutedSqlStatement(): string {
        return this._lastExecutedSqlStatement;
    }

    set lastExecutedSqlStatement(value: string) {
        this._lastExecutedSqlStatement = value
    }

    public GetById(id: number) {
        /* ... */
    }
}

it('깨지기 쉬운 테스트', async () => {
    const sut = new UserRepository()
    sut.GetById(1)
    expect(sut.lastExecutedSqlStatement).toBe('SELECT * FROM user where user_no = 1')
})
