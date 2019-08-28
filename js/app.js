const div = document.querySelector('.gallery');


fetch ('https://randomuser.me/api/?results=12') 
  .then( (response) => {
    return response.json();

  })
  .then( (data) => {
    console.log(data.results)
    // debugger;
    const users = data.results;
    users.forEach( (user) => {
      const output = document.createElement('div');
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
      output.classList.add('card');
      div.appendChild(output);
     
   

    })
  });

  // .catch( (error) => {
  //   console.log('Opps something went wrong!');
  // });


  // // A way of fetching all data
  // function fetchData(url){
  //   return fetch(url)
  //     .then(res => res.json())
  // }
