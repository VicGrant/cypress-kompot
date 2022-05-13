export class SettingsPage{
    companyAccount(){
        cy.get('a[href="/settings/companyAccount"]').click({multiple:true})
        cy.get('h5').should('contain','Company Information')
    }
    subscription(){
        cy.get('a[href="/settings/subscription"]').click()
        cy.get('h2').should('contain','Subscription')
    }
    workers(){
        cy.get('a[href="/settings/worker"]').click()
        cy.get('h4').should('contain','Teams')
    }
    bankIntegration(){
        cy.get('a[href="/settings/bank"]').click()
        cy.get('h2').should('contain','Bank Connect')
    }
    telephonyIntegration(){
        cy.get('a[href="/settings/telephony/integration"]').click()
        cy.get('h4').should('contain','Integration')
    }
    phoneNumbers(){
        cy.get('a[href="/settings/telephony/numbers"]').click()
        cy.get('h4').should('contain','Phone numbers')
    }
    billing(){
        cy.get('a[href="/settings/telephony/billing"]').click()
        cy.get('h4').should('contain','Telephony Billing')
    }
    documentWorkflow(){
        cy.get('a[href="/settings/generalWorkflow"]').click()
        cy.get('h2').should('contain','Workflow setup')
    }
    countries(){
        cy.get('a[href="/settings/countries"]').click()
        cy.get('h2').should('contain','Countries')
    }
    dateFormat(){
        cy.get('a[href="/settings/dateFormat"]').click()
        cy.get('h2').should('contain','Date Format')
    }
    currency(){
        cy.get('a[href="/settings/currency"]').click()
        cy.get('h2').should('contain','Currency')
    }
    schedule(){
        cy.get('a[href="/settings/schedule"]').click()
        cy.get('h2').should('contain','Some schedule settings')
    }
   twimlAppSettings(){
        cy.get('a[href="/settings/telephony/twimlApp"]').click()
        cy.get('h4').should('contain','Twiml App Settings')
   }
   companyAccountList(){
         cy.get('a[href="/settings/telephony/companyAccountList"]').click()
         cy.get('h4').should('contain','Company account dashboard')
   }
   users(){
         cy.get('a[href="/settings/telephony/users"]').click()
         cy.get('h1').should('contain','Users')
   }
}
export const checkLink = new SettingsPage()