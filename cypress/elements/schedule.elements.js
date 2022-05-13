import faker from "faker";

class ScheduleElements {
    calStartDatePopup(){
        cy.get('[qa_id="StartDateCalendar"]').click()
        //cy.get('[class="PrivatePickersSlideTransition-root css-dhopo2"]').contains('3').click()
        // also works
        cy.get('[role="grid"][class="css-i6bazn"]').contains('3').click() // different selectors
        //cy.get('[class="css-1v994a0"]').should('contain',"June")
        //cy.get('[class="PrivatePickersSlideTransition-root css-dhopo2"][aria-label="Apr 7, 2022"]').click()
    }
    calEndDatePopup(){
        cy.get('[qa_id="EndDateCalendar"]').click({ }) //cy.click() can only be called on a single element. Your subject contained 2 elements. Pass { multiple: true } if you want to serially click each element.
        //Throws Error: cy.get('[class="PrivatePickersFadeTransitionGroup-root MuiCalendarPicker-viewTransitionContainer css-5c7sx6"]').contains('23').click()
    }
    clockPopupStartTime(){
        cy.get('[qa_id="SartTimeClock"]').click()// does'nt select anything from the clock
        //Start time input
        cy.get('[qa_id="InputStartTime"]').click({force:true})
            .type(`8:30am`)
    }
    clockPopupEndTime(){
        cy.get('[qa_id="InputEndTime"]').click({force:true})
            .type(`${faker.time.recent()}`)
    }
}
export const getScheduleElements = new ScheduleElements()