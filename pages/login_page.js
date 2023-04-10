class loginPage{
    get usernameInPut() { return $('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input')}
    get passwordInPut() { return $('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input')}
    get loginButton() { return $('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button')}

    get dropDownButton() { return $('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span')}
    get logOutButton() { return $('/html/body/div/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a')}
    
    async loginProcedure (username, password) {
        await this.usernameInPut.setValue(username);
        await this.passwordInPut.setValue(password);
        await this.loginButton.click();
    }

    async logoutProcedure(){
        await this.dropDownButton.click();
        await this.logOutButton.isDisplayedInViewport()
        await this.logOutButton.click();
    }
}

module.exports = new loginPage();