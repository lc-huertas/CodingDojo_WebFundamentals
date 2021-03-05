$(document).ready(function(){
    // Click "Click" button
    $('button.Click').click(function(){
        alert("You clicked the button!");
    })  
    // Click "Hide" button
    $('button.Hide').click(function(){
        if ($('h3.Hide').css('display')=='none') {
            $('h3.Hide').show();
            $(this).text('.Hide');
        }
        else{
            $('h3.Hide').hide();
            $(this).text('.Show');
        }
    })  
    // Click "Toggle" button
    $('button.Toggle').click(function(){
        $('h3.Toggle').toggle("slow");
    })  
    // Click "SlideDown" button

    // Click "SlideUp" button
    $('button.UpDown').click(function(){
        if ( $('h3.UpDown').first().is( ":hidden" ) ) {
            $('h3.UpDown').slideDown("slow");
            $('button.UpDown').text('.slideUp');
        } 
        else {
            $('h3.UpDown').slideUp("slow");
            $('button.UpDown').text('.slideDown');
        }
    })
    // Click "Fade-In/Out" button
    $('button.OutIn').click(function(){
        if ( $('h3.OutIn').first().is( ":hidden" ) ) {
            $('h3.OutIn').fadeIn("slow");
            $('button.OutIn').text('.FadeOut');
        } 
        else {
            $('h3.OutIn').fadeOut("slow");
            $('button.OutIn').text('.FadeIn');
        }
    })
    // Click "Add Class" button
    $('#AddClass').click(function(){
        $('#AddClass').addClass("AddClass");
    })  
    // Click "Before" button
    $('button.Before').click(function(){
        $('h3.Before').before('<h1>new before</h1>');
    })  
    // Click "After" button
    $('button.After').click(function(){
        $('h3.After').after('<h1>new after</h1>');
    })  
    // Click "Append" button
    $('button.Append').click(function(){
        $('h3.Append').append('-->Hello?');
    })  
    // Click "HTML" button
    $('button.HTML').click(function(){
        $('h5.HTML').html('<p> this is a new paragraph now.</p>');
    })  
    // Click "attr" button
    $('button.attr').click(function(){
        $('h5.attr').html($('h5.attr').attr('sample'));
    })  
})