// SUT
class Calculator {
    public sum(first: number, second: number) {
        return first + second
    }
}

describe('AAA 패턴으로서의 테스트', () => {
    it('sum_of_two_numbers', () => {
        // 준비
        const first = 10
        const second = 20
        var calculator = new Calculator()

        // 실행
        const result = calculator.sum(first, second)

        // 검증
        expect(result).toBe(30)

    })
})
