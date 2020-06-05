$o('form *[type=submit]').addEventListener('click', function(evt) {
    
    evt.preventDefault()
    
    alert('Now, it will open your email client, for you to send a message?')
    
    const form = evt.target.closest('form')
    
    // fetches email from form's html "data-email" attribute
    const sendToEmail = form.dataset.email
    
    // change this accordingly or fit this selectors to your html form code
    const email = form.querySelector('input[type=email]').value
    const subject = form.querySelector('*[name=_subject]').value
    const name = form.querySelector('input[name=name]').value
    const text = form.querySelector('textarea[name=message]').value
    
    // new line separator for email body
    const nl = '\r\n'
    
    const message = text + nl + nl + '---' + nl + name
    
    const mailtoLink = 'mailto:' + sendToEmail + '?body=' + encodeURIComponent(message) + '&subject=' + encodeURIComponent(subject)
    
    // trigger mailto link
    window.open(mailtoLink)
});
