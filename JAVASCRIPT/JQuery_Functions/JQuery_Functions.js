$(document).ready(function(){
    // Click "Click" button
    $('button.Click').click(function(){
        $('label.Click').css('background-color','blue');
    })  
    // Click "Hide" button
    $('button.Hide').click(function(){
        if ($('label.Hide').css('display')=='none') {
            $('label.Hide').show();
            $(this).text('.Hide');
        }
        else{
            $('label.Hide').hide();
            $(this).text('.Show');
        }
    })  
    // Click "Toggle" button
    $('button.Toggle').click(function(){
        $('label.Toggle').toggle("slow");
    })  
    // Click "SlideDown" button

    // Click "SlideUp" button
    $('button.UpDown').click(function(){
        if ( $('label.UpDown').first().is( ":hidden" ) ) {
            $('label.UpDown').slideDown("slow");
            $('button.UpDown').text('.slideUp');
        } 
        else {
            $('label.UpDown').slideUp("slow");
            $('button.UpDown').text('.slideDown');
        }
    })
    // Click "Fade-In/Out" button
    $('button.OutIn').click(function(){
        if ( $('label.OutIn').first().is( ":hidden" ) ) {
            $('label.OutIn').fadeIn("slow");
            $('button.OutIn').text('.FadeOut');
        } 
        else {
            $('label.OutIn').fadeOut("slow");
            $('button.OutIn').text('.FadeIn');
        }
    })
    // Click "Add Class" button
    
    // Click "Fade-Out" button
})