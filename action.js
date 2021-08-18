$(document).ready(function() {
    $("#submit-form").validate({
        rules:{
            name : {
                required : true,
                minlength :4 ,
                
            },
            email : {
                email : true,
                required: true,
            },
            mobile : {
               
                minlength :10,
                maxlength : 10,
                required : true
               
            },
            message : {
                required :true
            },
         
        },
        
        submitHandler:function(){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyk3CtzGr7ApdwJpiGt5gbtLVqEeWgD3h_G_kcbPCDVexx5GmQVqtUOlyz-Wa7LZMDg/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload();
                    console.log(window.location); //window.location is 'localhost:12345/Cart'
                    window.location.reload(true)
                    

                    
                    window.reload();
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        }

       

    }),
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    

})






