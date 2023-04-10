class mainPage{
    get recruitmentButton() { return $('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(5) > a > span')}
    get vacancyMenu() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input')}    
    get vacancyOption() {return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(6)')}
    get statusMenu() {return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > div.oxd-select-text-input')}
    get statusOptionHired() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(10)')}
    get statusOptionShortlisted() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(3)')}
    get dateFrom() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > input')}
    get dateTo() {return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(2) > div > div > input')}
    get searchButton() {return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space')}
    get openRecordButton() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div > div > div:nth-child(7) > div > button:nth-child(1)')}
    get employeeName() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-card-container > form > div.oxd-grid-3.orangehrm-full-width-grid > div:nth-child(1) > div > div:nth-child(2) > p')}
    get employeeMiddleName() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-background-container > div > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input')}
    get employeeEmail() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-background-container > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > input')}
    get employeePhone() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-background-container > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > input')}

    async selectingVacancy() {
        await this.vacancyMenu.waitForDisplayed()
        await this.vacancyMenu.click()
        await this.vacancyOption.waitForDisplayed()
        await this.vacancyOption.click()
    }

    async selectingStatus() {
        await this.statusMenu.waitForDisplayed()
        await this.statusMenu.click()
        await this.statusOptionShortlisted.waitForDisplayed()
        await this.statusOptionShortlisted.click()
        // await this.statusOptionHired.waitForDisplayed()
        // await this.statusOptionHired.click()
    }

    async selectingData (date_from, date_to) {
        await this.dateFrom.setValue(date_from)
        await this.dateTo.setValue(date_to)
    }


}

module.exports = new mainPage();