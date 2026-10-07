

const users = [
  {
    "name": "Kshama Chen",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    "bio": "Senior Full-Stack Developer passionate about open-source projects."
  },
  {
    "name": "Ninaad Vance",
    "picture": "https://images.unsplash.com/photo-1634581097148-2b815b7ec698?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "bio": "Lead UI/UX Designer dedicated to creating intuitive digital products."
  },
  {
    "name": "Elena Rostova",
    "picture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "bio": "Product Manager who bridges customer needs with technological capability."
  },
  {
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    "bio": "Data Scientist specializing in machine learning pipelines."
  },
  {
    "name": "Aaliyah Patel",
    "picture": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    "bio": "DevOps Engineer focused on automation, continuous integration."
  },
  {
    "name": "Lucas Morales",
    "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvc3xlbnwwfHwwfHx8MA%3D%3D",
    "bio": "Content Strategist and technical writer with a knack for translating."
  },
  {
    "name": "Chloe Bennett",
    "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "bio": "Cybersecurity Specialist advocating for robust data protection."
  }
];

function showUsers(arr){
return arr.forEach((user) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = user.picture;
    img.classList.add('bg-img');
    const blurr = document.createElement('div');
    blurr.style.backgroundImage = `url(${user.picture})`;
    blurr.classList.add('blurred_layer');
    const content = document.createElement('div');
    content.classList.add('content');
    const heading = document.createElement('h3');
    heading.textContent = user.name;
   const p = document.createElement('p');
   p.textContent = user.bio;

   content.appendChild(heading);
   content.appendChild(p);

    card.appendChild(img);
   card.appendChild(blurr);
   card.appendChild(content);

   document.querySelector('.cards').appendChild(card);
     
});
}

showUsers(users);

let p1 = document.querySelector('#ptag');

let inp = document.querySelector('.search_css');
inp.addEventListener('input', function(){
let query = inp.value.toLowerCase().trim();



let newUser = users.filter((user) => {
        return user.name.toLowerCase().includes(query);    
});

  if (newUser.length === 0) {
    p1.textContent = 'User Not found';
    p1.style.color = 'white';
  } else {
    p1.textContent = '';
  }

document.querySelector('.cards').innerHTML = '';
showUsers(newUser);


});



