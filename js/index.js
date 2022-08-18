const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const exibirEventos = async () => {
    const resposta = await fetch(SOUND_URL);
    const data = await resposta.json();
    const listagem = data.slice(0,3);

    const cardEvent = document.querySelector('#primeiros');
    let htmlEventos = ""
    listagem.forEach((event) => {

        htmlEventos += `
        <article class="evento card p-5 m-3">
        <h2>${event.name} - ${event.scheduled}</h2>
        <h4>${event.attractions}</h4>
        <p>${event.description}</p>
        <a href="#" onclick="iniciaModal('.reserva-modal')" class="btn btn-primary">reservar ingresso</a>
        </article>
        `
});

   cardEvent.innerHTML = htmlEventos
};

exibirEventos()