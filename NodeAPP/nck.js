const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/obfus', (req, res) => {
    var fs= require('fs');
    var JavaScriptObfuscator = require('javascript-obfuscator');
    
    var code=`${req.body.fname} `;
    
    var obfuscationResult = JavaScriptObfuscator.obfuscate(
        code,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            shuffleStringArray: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
    );
    
    const fcode=obfuscationResult.getObfuscatedCode();
    
    const visited = [];
    var fncode =fcode.replace(/;/g, ";<br>"); 
    fncode=fncode.replace(/}/g, "}<br>"); 
    fncode=fncode.replace(/{/g, "{<br>"); 
   // res.render("obfus", {visited: fncode})  
  
   res.send(`
   
<!doctype html>
<html lang="en">
  <head>
   
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Cybersecurity</title>
    <link rel="stylesheet" href="https://jauntyjay09.github.io/mstyle.css">
    <script src="https://cdn.jsdelivr.net/npm/javascript-obfuscator/dist/index.browser.js"></script>
  </head>
  <body>
     

    <nav class="navbar navbar-expand-lg navbar-light "style="background-color:#1131d1;">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:5000/">
              <img src="https://jauntyjay09.github.io/logo.png" class="d-inline-block align-top" alt="" width="120" height="120">
     </a>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
         

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
        <ul class="nav ">
          <li class="nav-item">
            <a class="nav-link" style="color: white;" href="/url"><h5>URL-Scan</h5></a>
          </li>
          
        </ul>
        <ul class="nav ">
          <li class="nav-item">
              <a class="nav-link" style="color: white;" href="/deepscan"><h5>Deep Scan</h5></a>
        
          </li>
          
        </ul>
       
        <ul class="nav ">
          <li class="nav-item">
              <a class="nav-link" style="color: white;" href="/dnsip"><h5>DNS/IP</h5></a>
        
          </li>
          
        </ul>
        <ul class="nav ">
          <li class="nav-item">
              <a class="nav-link" style="color: white;" href="/services"><h5>OBFUSCATION</h5></a>
        
          </li>
          
        </ul>
        </div>
      </div>
    </nav>

    
<br><br>

   
     
     
  <!--fifth--> 

   <div class="container-fluid ">
    <div class="row text-center col-md-10 mx-auto ma">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ma" >
        <h3 class="display-6"> 
           Obfuscation <br>(Javascript obfuscation)
        </h3>
      </div>
      <div class="col-md-3 mx-auto im ma">
        <img src="https://jauntyjay09.github.io/codeseg.png">
      </div>
     
      
      </div>

      <div class="row  col-md-10 mx-auto ma">
        
        
        <div class="card col-md-8 mx-auto" style="padding: 2em 2em 2em 2em;">
         <b>Obfuscated Code : <br></b>
         ${fncode}  
          
         
        </div>
        
        </div>
      </div>  
    
<br><br><br>
 
  
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
   
  </body>
</html>
 `);

});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

/*
(function(){
    var variable1 = '5' - 3;
    var variable2 = '5' + 3;
    var variable3 = '5' + - '2';
    var variable4 = ['10','10','10','10','10'].map(parseInt);
    var variable5 = 'foo ' + 1 + 1;
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);
    console.log(variable5);
})();
*/