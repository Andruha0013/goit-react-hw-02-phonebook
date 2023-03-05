import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends Component{

    state={
        name:"",
        number: "",
    };
//-----------------------------------------------------------------------------------------------
    handleChangeInput=(event)=>{
        //console.log({[event.currentTarget.name]: event.currentTarget.value});
        this.setState({[event.currentTarget.name]: event.currentTarget.value});
    }
    
//-----------------------------------------------------------------------------------------------
    onSubmitFunction=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({name:"",number:""});
    }
//-----------------------------------------------------------------------------------------------
    render(){
        return (
            <form id="contactForm" name="contactForm" onSubmit={this.onSubmitFunction}>
                <fieldset className={css.contact_form}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChangeInput}
                        value={this.state.name}
                    />
                    <label htmlFor="tel">Number</label>
                    <input
                        type="tel"
                        id="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChangeInput}
                        value={this.state.number}
                    />
                    <button id="addContact" name="addContact" value="addContact" type="submit">add contact</button>
                </fieldset>
            </form>
        );
    }
}
export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};