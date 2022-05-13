import faker from "faker";

class OrderElements {
    orderType(){
        cy.get('input#orderTypeInput').click()//[id="orderTypeInput"][aria-autocomplete="list"][value aria-controls="orderTypeInput-listbox"][active descendent = "orderTypeInput-option-2"]
        cy.contains('Fix').click({force:true});
        //.type(`${faker.commerce.productDescription()}`);
        //cy.get('[value aria-controls="orderTypeInput-listbox"][active descendent = "orderTypeInput-option-2"]').click()
        //cy.get('select[id="orderTypeInput"]').select('Fix')
        //cy.get('[]').click()
    }

    orderDescription(){
        cy.get('[name="description"]') //class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline css-u36398",
            .type(`${faker.commerce.productDescription()}`);
        //cy.get('[name="description"]')//.click({force:true})
        //.type(`${faker.commerce.productDescription()}`);
        //,[aria-activedescendent="orderTypeInput-option-0"]
        // aria-activedescendent="orderTypeInput-option-0"
    }
}

export const getOrderDetails = new OrderElements()