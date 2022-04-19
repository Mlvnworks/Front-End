const searchContact = bar =>{
    const input = bar.target.value.toLowerCase();
    const contacts = document.querySelectorAll('#contact-list  li');

    const startSearch = () => {
        contacts.forEach(contact => {
            const person = contact.textContent.toLowerCase();
            if(person.includes(input)){
                contact.style.display = '';
            }else{
                contact.style.display = 'none';
            }
        });
    };
    startSearch();
};
document.querySelector('#search-bar').addEventListener('input',searchContact);





