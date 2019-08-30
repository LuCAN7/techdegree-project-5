
const gallery = document.querySelector('.gallery');
const modalContainer = document.createElement('div');

modalContainer.classList.add('modal-container');
// Fecth 12 random users from API
fetch ('https://randomuser.me/api/?results=12') 
  .then( (response) => {
    return response.json(); // return Promise as a JSON object
  })
  .then( (data) => {
    // const response2 = data.clone();
    // place JSON object into 'users' variable
    const users = data.results;
    // Loop through each user in users array
    users.forEach( (user) => {
      const output = document.createElement('div');
      
      output.classList.add('card');
      // Use template literals to display output
      output.innerHTML = 
      `
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
          <p class="card-text">${user.email}</p>
          <p class="card-text cap">${user.location.city} ${user.location.state} </p>
        </div>
      `; 
      // for each output add an event listener 
      output.addEventListener('click', (e) =>{
        // Slice the user DOB values into specific variables
        const dob = user.dob.date.slice(0,10); 
        const month = dob.slice(5,7);
        const day = dob.slice(8,11);
        const year = dob.slice(2,4);
        
        // Use template literals to display the modal conatiner
        modalContainer.innerHTML =
        `
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${user.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="modal-text">${user.email}</p>
                <p class="modal-text cap">${user.location.city}</p>
                <hr>
                <p class="modal-text">${user.phone}</p>
                <p class="modal-text">${user.location.street}, ${user.location.state}, ${user.location.postcode}</p>
                <p class="modal-text">Birthday:${month}/${day}/${year}</p>
          </div>
          <br>
          <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
        `;
        // Insert the modal container to be display after click event
        document.body.insertBefore(modalContainer, gallery);
        // Add event listner to 'X' in modal to remove
        const closeBtn = document.querySelector('button')
          .addEventListener('click', (e) =>{
            document.body.removeChild(modalContainer);

        });

        const prevBtn= document.querySelector('#modal-prev').addEventListener('click', () => {});
        const nextBtn= document.querySelector('#modal-next').addEventListener('click', () => {const next = output.nextSibling;});
        
      })
      // Add each user object to gallery div 
      gallery.appendChild(output); 
      
    });
 
  })
  .catch( (error) => { console.error("Something went wrong!", error); });
 



  

  
   

