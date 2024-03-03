//referenced google and various websites for help with this //

$(document).ready(function () {
    $('.container').click(function () {
        var randomColor = getRandomColor();
        $(this).append('<div class="stripe" style="background-color: ' + randomColor + ';"></div>');
    });

    $('.container').on('mouseenter', '.stripe', function () {
        var randomColor = getRandomColor();
        $(this).css('background-color', randomColor);
    }).on('mouseleave', '.stripe', function () {
        $(this).css('background-color', random);
    });

    $('.container').on('dblclick', '.stripe', function () {
        $(this).fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // had to google this one too - super confusing how to get random colours // 

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});