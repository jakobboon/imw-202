console.log("connected")

fetch('https://ghibliapi.vercel.app/films')
    .then(response => response.json())
    .then(data => {
        data.forEach(film => {
            let filmElement = $(`<div><h2>${film.title}</h2></div>`);
            filmElement.on('click', () => {
                $('#popup-description').text(film.description);
                $('#popup').show();
            });
            $('section.exercise').append(filmElement);
        });
    })
    .catch(error => {
        console.log(error);
    });


$(document).on('click', '.close', function () {
    $('#popup').hide();
});