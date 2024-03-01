class Contact_Us_PO {
    contactForm_Submission(name, last_name,email, description) {
        if(name){
            cy.get('[name="first_name"]').type(name)
        }
        if(last_name){
            cy.get('[name="last_name"]').type(last_name)
        }
        if(email){
            cy.get('[name="email"]').type(email)
        }
        if(description){
            cy.get('textarea.feedback-input').type(description)
        }
        cy.get('[type="submit"]').click()
        cy.screenshot("Make a contact us form submission")
        
    }
}

export default Contact_Us_PO;