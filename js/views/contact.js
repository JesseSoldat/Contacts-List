
function contactTemplate(data) {
  

  return `
 <div class="details">
  <ul>
    <li><h2>Contact</h2></li>
    <li><h3>${data.FirstName} ${data.LastName}</h3></li>
    <li><h3>${data.Email}</h3></li>
    <li><h3>${data.Telephone}</h3></li>
    <li><h3>${data.Location}</h3></li>
  </ul>
  </details>
 

  `
}

export default contactTemplate;