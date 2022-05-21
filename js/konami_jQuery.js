"use strict";
let input = '';
let code = '3838404037393739656613';
function konami(){

    $(document).keyup(function(e){
        input += e.keyCode;//adds the keycode to the input string;
        let check = code.substring(0,input.length);// creates a check substring to compare the input to the code;
        //if the input isn't the same as the check, resets the input and check fields;
        if(input !== check){
            input = '';
            check = '';
            console.log('reset');
        }
        //if the last key hit was return and the input is the same as the check then execute & reset the input & check variables;
        if(input.substring(input.length - 2, input.length) === '13' && input === check){
            $('.cheater').css('display', 'block')
            $('.close').click(function(){
                $('.cheater').css('display', 'none')
            })
            input = '';
            check = '';
        }
    });
}
//mirrors functionality above but by clicking buttons on the shown controllers
function konomiButton(){
    $('.up').click(function(){input += 38;});
    $('.right').click(function(){input += 39;});
    $('.down').click(function (){input += 40;});
    $('.left').click(function(){input += 37;})
    $('#a').click(function(){input += 65;})
    $('#b').click(function(){input += 66;})
    $('#start').click(function(){
        input += 13;
        if(input === code){
            $('.cheater').css('display', 'block')
            $('.close').click(function() {
                $('.cheater').css('display', 'none')
            })
            input = '';
        }
        input = '';
    })
}
//has buttons light up as during hover state while the keys are pressed on the keyboard
function shinyButtons(){
    $(document).keydown(function(e){
        if (e.key === 'a') {
            $('#a').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('#a').removeClass('shiny').addClass('button');
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'b') {
            $('#b').removeClass('button').addClass('shiny')
            $(document).keyup(function(){
                $('#b').removeClass('shiny').addClass('button');
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'ArrowUp') {
            $('.up').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('.up').removeClass('shiny').addClass('button')
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'ArrowRight') {
            $('.right').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('.right').removeClass('shiny').addClass('button')
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'ArrowDown') {
            $('.down').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('.down').removeClass('shiny').addClass('button')
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'ArrowLeft') {
            $('.left').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('.left').removeClass('shiny').addClass('button')
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'Enter') {
            $('#start').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('#start').removeClass('shiny').addClass('button');
            })
        }
    })
    $(document).keydown(function(e){
        if (e.key === 'Meta') {
            $('#select').removeClass('button').addClass('shiny');
            $(document).keyup(function(){
                $('#select').removeClass('shiny').addClass('button');
            })
        }
    })
}