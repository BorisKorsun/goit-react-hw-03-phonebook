import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';


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
        const { name, value } = e.currentTarget;

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
        <label>
            Name
            <Field
            onChange={this.onInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            <ErrorMessage name="name" component="div"/>
        </label>
        <label>
            Number
            <Field
            onChange={this.onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
            <ErrorMessage name="number" component="div"/>
        </label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
    </PhoneBookForm>
    </Formik>
    </>
    }
};

export default Phonebook;