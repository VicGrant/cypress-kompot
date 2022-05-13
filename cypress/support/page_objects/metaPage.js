class metaPage{
    open(path){
        return cy.visit(path)
    }
}

export default metaPage