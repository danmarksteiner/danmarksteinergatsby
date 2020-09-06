import './ContactForm.scss'
import React, { Component } from 'react'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false,
    }
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(
        this.setState({ messageSent: true }),
        this.resetForm(),
        this.messageSuccess()
      )
      .catch((error) => alert(error))

    e.preventDefault()
  }

  currentYear = new Date().getFullYear()
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
  resetForm() {
    this.setState({ name: '', email: '', message: '' })
  }
  messageSuccess = () => {
    if (this.state.messageSent === true) {
      return (
        <div>
          <p>
            Thank you for getting in contact. I will be in touch as soon as
            possible.
          </p>
        </div>
      )
    }
    return (
      <form
        id="contact-form"
        method="POST"
        name="contact"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="contact" value="the-name-of-the-html-form" />
        <div className="form-group">
          <div className="field-wrap">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
              required
            />
          </div>
          <div className="field-wrap">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="field-wrap">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
        </div>
        <div className="form-group"></div>
        <div className="form-group form-group-submit">
          <div className="field-wrap">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }

  render() {
    return (
      <section className="contact-form">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>For work enquries please complete the form below.</p>
          {this.messageSuccess()}
        </div>
        <div className="contact-footer"></div>
      </section>
    )
  }
}

export default ContactForm
