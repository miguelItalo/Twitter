const postagens = [
      {     
            profile: 'https://pbs.twimg.com/profile_images/1623373145578082324/W8wwJlBL_400x400.jpg',
            name: 'Saiko♦️🤓',
            arroba: 'SaikoMene',
            hora: '19 h',
            comentario: 'meu sonho era ser esse sabado animado aqui”',
            img: 'https://pbs.twimg.com/media/FvkGR57XsAAke1d?format=jpg&name=360x360',
            verificado: false,
            retweet: '2460',
            comments: '349',
            like: '25.4 mil',
            view: '423 mil'
      },
      {
            profile: 'https://pbs.twimg.com/profile_images/1539318519178969090/8LxbtL5X_400x400.jpg',
            name: 'Biodiversidade Brasileira',
            arroba: 'BiodiversidadeB',
            hora: '7 h',
            comentario: 'Harpia predando um filhote de bicho-preguiça. <br><br> 📷 Cesar Bollatty',
            img: 'https://pbs.twimg.com/media/Fvm1Nk9XoAMAQKQ?format=jpg&name=900x900',
            verificado: false,
            retweet: '427',
            comments: '213',
            like: '8.836',
            view: '361.7 mil'
      },
      {
            profile: 'https://pbs.twimg.com/profile_images/1637490944923533313/crRnyinU_400x400.jpg',
            name: 'exercite o cérebro e fortaleça ...',
            arroba: 'diojorange',
            hora: '1 h',
            comentario: 'pouco se fala sobre a NECESSIDADE de fazerem um filme solo do burro',
            img: 'https://pbs.twimg.com/media/FvoRAfVWIAUo_2Q?format=jpg&name=small',
            verificado: true,
            retweet: '1.298',
            comments: '115',
            like: '9.535',
            view: '207.2 mil'
      },
      {
            profile: 'https://pbs.twimg.com/media/Fvh5t75X0AAxeHV?format=jpg&name=900x900',
            name: 'no universo negativo',
            arroba: 'mundonegativo',
            hora: '13 h',
            comentario: '',
            img: 'https://pbs.twimg.com/media/Fvr4ooHWcAEIwni?format=jpg&name=small',
            verificado: false,
            retweet: '2.117',
            comments: '93',
            like: '15.6 mil',
            view: '312.9 mil'
      }
]

const sectionCards = document.querySelector('.content')

const postagemHtml = postagens.map((post) => {
      return `
      <section class="card">
            <img src="${post.profile}" alt="">
            <section class="post">
                  <p class="name">${post.name} ${post.verificado ? '<img src="img/verificado.png" width="16px" alt="">' : ''}   <span>@${post.arroba} • ${post.hora}</span></p>
                  <p class="comment">${post.comentario}</p>
                  <img class="img" src="${post.img}" alt="">
                  <section class="actions">
                        <p class="chat"><img src="img/chat.svg" alt="">${post.comments}</p>
                        <p><img src="img/retweet.svg" alt="">${post.retweet}</p>
                        <p><img src="img/heart.svg" alt="">${post.like}</p>
                        <p><img src="img/graph.svg" alt="">${post.view}</p>
                  </section>
            </section>
      </section>
      `
})

postagemHtml.forEach((item) => {
      sectionCards.innerHTML += item
})