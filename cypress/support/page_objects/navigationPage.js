//File stores classes and methods used for objects/elements in the navigation menu/nav bar

export class NavigationPage{
    //storing elements for hamburger menu links
    worker = () => cy.get('a[href="/worker"]')
    address = () => cy.get('a[href="/address"]')
    vendor = () => cy.get('a[href="/vendor"]')
    product = () => cy.get('a[href="/product"]')
    purchaseOrder = () => cy.get('a[href="/purchaseOrder"]')
    absence = () => cy.get('a[href="/absence"]')

    wor = function wprvdan (worker) {
        return console.log("123")
    }

    hamburgerIcon2 = (selector) => {
        switch (selector){
            //hamburger element selectors
            case 'worker': return cy.get('a[href="/worker"]')
            case 'address': return this.address()
            case 'vendor': return this.vendor()
            case 'product': return this.product()
            case 'purchaseOrder': return this.purchaseOrder()
            case 'absence': return this.absence()
        }
    }
    pageCheck = (pageElement) => {
        switch (pageElement){
            //hamburger links verification pages: page-title elements
            case 'Workers' : return cy.get('.h2') // [class="h2 mb-0 me-5"] // [data-qa = "page-title"]
            case 'Addresses' : return cy.get('[class="h4 mr-4"]')
            case 'Vendors' : return cy.get('[data-qa = "page-title"]')
            case 'Products' : return cy.get('[data-qa = "page-title"]')
            case 'Purchase Orders' : return cy.get('h4')
            case 'Absences' : return cy.get('h4')
            //Profile menu verification page elements: url
            case 'profile' : return cy.url().should('contain', 'profile')
            case 'companyAccount' : return cy.url().should('contain', 'companyAccount')
        }
    }

    clientPageOpen(){ // Creating method that will open 'Clients' page
        cy.get('[href="/client"]').click()
        //cy.wait(2000)
        cy.get('[data-qa="page-title"]').should('contain','Clients')
        //cy.get('[data-qa="create-client-button"]').should('contain','Create Client') // validation that the page is open
    }

    ordersPageOpen(){ // Creating method that will open 'Clients' page
        cy.get('[href="/order"]').click()
        cy.get('[data-qa="page-title"]').should('contain','Orders')
        cy.url().should('include', '/order'); //validation that the page is open to check that the url is correct
    }
    estimatesPageOpen(){ // Creating method that will open 'Clients' page
        cy.get('[href="/estimate"]').click()
        cy.get('[data-qa="page-title"]').should('contain','Estimates')
        cy.get('[type="button"]').should('contain','New Estimate') // validation that the page is open
    }
    invoicesPageOpen(){
        cy.get('[href="/invoice"]').click()
        cy.get('[data-qa = "page-title"]').should('contain','Invoices')
        cy.get('[type="button"]').should('contain','Create Invoice')
    }
    paymentsPageOpen(){
        cy.get('[href = "/payment"]').click()
        cy.get('[data-qa = "page-title"]').should('contain','Payments')
        cy.get('[type="button"]').should('contain','Create Payment')
    }
    schedulePageOpen(){
        cy.get('[href = "/schedule/calendar"]').click()
        cy.get('[class="fs-5 fw-bolder text-black"]').should('contain','Schedule','Map','Settings')
    }

    // original version:
    // hamburgerIcon(selector){
    // cy.get('[alt="dashIcon"]').click()
    // cy.get(`a[href="/${selector}"]`).click()
    // }

    hamburgerIcon(selector, pageElement){
    cy.get('[alt="dashIcon"]').click()
    this.hamburgerIcon2(selector).click()
    this.pageCheck(pageElement).should('contain',`${pageElement}`)
    }

    humburgerWorker(){
        cy.get('[alt="dashIcon"]').click()
        this.worker.click()
        cy.get('.h2').should('contian','Worker')
    }
    humburgerAdress(){
        cy.get('[alt="dashIcon"]').click()
        cy.get('a[href="/worker"]').click()
        cy.get('.h2').should('contian','Worker')
    }



    userinfoIcon(){
        cy.get('[alt="Docs"][class="userinfo-icon"]').click()
    }
    settingsIcon(){
        cy.get('[data-qa="settings-icon"]').click()
    }
    userProfileIcon(selector, pageElement){
        cy.get('[data-qa="userInfoName"]').click()
        cy.get(`[data-qa="${selector}"]`).click()
        this.pageCheck(pageElement)
    }
}
export const navigateTo = new NavigationPage()

export default NavigationPage