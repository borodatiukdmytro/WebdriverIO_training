const LoginPage = require("../pages/login_page")
const FirstDescribe = require("../pages/first_describe")
const SecondDescribe = require("../pages/second_describe")

describe("Orange website test", function (){
    before ( async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/')
        await LoginPage.loginProcedure('Admin','admin123')
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
    after (async () => {
        await LoginPage.logoutProcedure()
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    describe("first describe", function(){
        before(async () => {
            await FirstDescribe.recruitmentButton.click()
            await FirstDescribe.selectingVacancy()
            await FirstDescribe.selectingStatus()
            await FirstDescribe.selectingData("2020-01-02","2023-04-04")
            await FirstDescribe.searchButton.click()
            await FirstDescribe.openRecordButton.click()
        })
        it("Check that employee name is Joe Root", async () =>{
            await expect(FirstDescribe.employeeName).toHaveText('Joe Root')
        })
        it("Check that employee has no middle name", async () => {
            await expect(FirstDescribe.employeeMiddleName).toHaveValue("")
        })
        it("Check email", async () =>{
            await expect(FirstDescribe.employeeEmail).not.toHaveValue('')
        })
        it("Check phone", async () =>{
            await expect(FirstDescribe.employeePhone).not.toHaveValue('')
        })
    })

    describe("second describe", function(){
        before(async () => {
            await SecondDescribe.navigationToTrackerProcedure()
        })
        it("Check that there are exactly 2 logs", async () =>{
            await expect(SecondDescribe.logsContainer).toHaveChildren({ eq: 2 })
        })
        it("Check that dates of two logs are the same", async () =>{
            await expect(SecondDescribe.log1Date.getText()).toEqual(SecondDescribe.log2Date.getText())
        })
        it("Check that first log (bottom one) is negative", async () =>{
            await expect(SecondDescribe.svgElement).toHaveElementClassContaining('--negative')
        })
        it("Check that second log is written by Aaliyah Haq", async () =>{
            await expect(SecondDescribe.logTopLogAuthor).toHaveText('Aaliyah Haq')
        })
    })
})