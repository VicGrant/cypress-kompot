class StatesElements {
    get texsas (){ return cy.get(`[data-value = "Texas"]`)};
}

export default new StatesElements()


//qa_id="SelectStateInput"
//cy.get('[qa_id="SelectStateInput"]')
// .type('California')
//.find('California')
//.find('[li class="MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-aqkk55"]') // returns 7 li elements
// .contains('California') // returns a single element
//cy.get('.list')
//cy.get('[type="submit"]').click()

//cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment').click({force:true})//.get('select[aria-controls="orderTypeInput-listbox"]').select(0)//value