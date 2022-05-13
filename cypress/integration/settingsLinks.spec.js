import {navigateTo} from "../support/page_objects/navigationPage";
import {checkLink} from "../support/page_objects/settingsPage";

describe('Company account links',function () {

    beforeEach(() => {
        cy.login()
    });

    it('should click on all navbar links', function () {

        navigateTo.settingsIcon('settings','companyAccount')

        checkLink.companyAccount()
        checkLink.subscription()
        checkLink.workers()
        checkLink.bankIntegration()

         //Telephony
         checkLink.telephonyIntegration()
         checkLink.phoneNumbers()
         checkLink.billing()

        //**********************************************************
        checkLink.documentWorkflow()
        checkLink.countries()
        checkLink.dateFormat()
        checkLink.currency()
        checkLink.schedule()

        //Admin
        checkLink.twimlAppSettings()
        checkLink.companyAccountList()
        checkLink.users()

    });
});