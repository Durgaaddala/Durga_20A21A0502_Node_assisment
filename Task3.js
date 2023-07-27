var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
auth:{
    user:'daddala529@gmail.com',
    pass:'var nodemailer=require('nodemailer');
    var transporter=nodemailer.createTransport({
        service:'gmail',
    auth:{
        user:'daddala529@gmail.com',                                ',
        pass:'rhucrszihjudutir'
    
    }
    
        
    });
    var mailOptions={
        from:'daddala529@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from Narendra',
        text:'Task3 Completed'
    };
    
    transporter.sendMail(mailOptions,function(error,info){
    
    
        if(error){
            console.log(error);
    
        }
        else{
            console.log('Email sent:'+info.response);
        }
        
        
        
        
    });'

}

    
});
var mailOptions={
    from:'daddala529@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Narendra',
    text:'Task3 Completed'
};

transporter.sendMail(mailOptions,function(error,info){


    if(error){
        console.log(error);

    }
    else{
        console.log('Email sent:'+info.response);
    }
    
    
    
    
});