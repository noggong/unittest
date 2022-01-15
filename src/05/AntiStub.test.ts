class User {
    public getNumberOfUser() {
        return 5
    }
}

class Report {
    public createReport(user: User) {
        return user.getNumberOfUser()
    }
}

it('스텁으로 상호 작용 검증', async () => {
    const stub = new User()
    stub.getNumberOfUser = jest.fn().mockReturnValue(10)
    const report = new Report()
    const users = report.createReport(stub)

    expect(users).toBe(10)
    expect(stub.getNumberOfUser).toHaveBeenCalledTimes(1)


})
