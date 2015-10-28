

function proccessData(data) {
  return data.map(function(item) {
    return `
    
      <li class='contact-list-item' data-contact-id="${item.objectId}"><h3>${item.FirstName} ${item.LastName}</h3></li>
    
      

    `
  }).join('');
}

function contactsTemplate(data) {
  return `
  <div class="contacts">
    <h2>My Contacts</h2>
    <ul>${proccessData(data)}</ul>
  </div> 
  `;
}

export default contactsTemplate
