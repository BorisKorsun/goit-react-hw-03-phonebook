import React, { Component } from 'react';
import { Formik } from 'formik';
import FormField from './FormField'


import { SubmitBtn, PhoneBookForm } from './Phonebook.styled';

const InitialValues = {
    name: '',
    number: '',
};

class Phonebook extends  Component {
    state = {
        name: '',
        number: '',
    };

    onInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value})
    };

    onSubmit = () => {
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm() {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
    const { name, number } = this.state;
    
    return <>
    <Formik initialValues={InitialValues} onSubmit={this.onSubmit} >
    <PhoneBookForm>
        <FormField 
        name="name"
        onChange={this.onInputChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <FormField
        name="number"
        onChange={this.onInputChange}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
    </PhoneBookForm>
    </Formik>
    </>
    }
};

export default Phonebook;