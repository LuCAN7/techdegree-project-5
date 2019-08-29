
const gallery = document.querySelector('.gallery');
const modalContainer = document.createElement('div');

modalContainer.classList.add('modal-container');

fetch ('https://randomuser.me/api/?results=12') 
  .then( (response) => {
    return response.json();
  })
  .then( (data) => {

    // const response2 = data.clone();
    
    const users = data.results;
    users.forEach( (user) => {
      const output = document.createElement('div');
      // console.log(user)
      output.classList.add('card');
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
      `  
       
      output.addEventListener('click', (e) =>{
        const dob = user.dob.date.slice(0,10); 
        const month = dob.slice(5,7);
        const day = dob.slice(8,11);
        const year = dob.slice(2,4);
        
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
        `
        document.body.insertBefore(modalContainer, gallery);
        const closeBtn = document.querySelector('button').addEventListener('click', (e) =>{
          document.body.removeChild(modalContainer);

        });

      })

      gallery.appendChild(output);   
    
   
    });

    // function createModal(users) {    
    // }
  //// A way of fetching all data
  // function fetchData(url){
  //   return fetch(url)
  //     .then(res => res.json())
  // }


    });
 



  

  

