const div = document.querySelector('.search-container');


fetch ('https://randomuser.me/api') 
  .then( (response) => {
    return response.json();

  })
  .then( (data) => {
    const user = data.results[0];
    // console.log(user);
    const output = document.createElement('div');
    output.innerHTML = `
      <h2>${user.name.first}</h2>
      <h3>${user.name.last}</h3>
      <h4>${user.name.title}</h4>
    
    `
    div.appendChild(output);
     
  })

  // .catch( (error) => {
  //   console.log('Opps something went wrong!');
  // });
