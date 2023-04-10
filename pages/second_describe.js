class Second_Describe{
    get performanceButton() { return $('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(7) > a > span')}
    get employeeTrackersButton() { return $('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(4) > a')}
    get commitmentAndDeadlinesTrackerButton() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(3) > div > div:nth-child(5) > div > button')}

    async navigationToTrackerProcedure(){
        await this.performanceButton.waitForDisplayed()
        await this.performanceButton.click()
        await this.employeeTrackersButton.waitForDisplayed()
        await this.employeeTrackersButton.click()
        await this.commitmentAndDeadlinesTrackerButton.waitForDisplayed()
        await this.commitmentAndDeadlinesTrackerButton.click()
    }

    get logsContainer() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container')}
    get log1Date() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div:nth-child(1) > div > div.orangehrm-employee-tracker-log-content-section > div.orangehrm-employee-tracker-log-reviewer-date > div > p')}
    get log2Date() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div:nth-child(2) > div > div.orangehrm-employee-tracker-log-content-section > div.orangehrm-employee-tracker-log-reviewer-date > div > p')}
    get logTopLogAuthor() { return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div:nth-child(1) > div > div.orangehrm-employee-tracker-log-content-section > div.orangehrm-employee-tracker-log-reviewer-name > p')}
    get svgElement() {return $('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div:nth-child(2) > div > div.orangehrm-employee-tracker-log-content-section > div.orangehrm-employee-tracker-log-content-container > div.orangehrm-employee-tracker-log-header > div > svg')}

}

module.exports = new Second_Describe();