var Btn = document.getElementById('Btn');
var ListFilm = document.getElementById('ListFilm');
var Film_Info = document.getElementById('Film_Info');
var Header_Body = document.getElementById('Header_Body');
var Box_Btn_Body = document.getElementById('Box_Btn_Body');





Btn.onclick = function () { 

      



   if(ListFilm.style.display === "none"){

    ListFilm.style.display = "block";
    Film_Info.style.display = "none";
    

    

   } else

   {

    ListFilm.style.display = "none";
    Btn.style.display = "none";
    Film_Info.style.display = "block";
    Header_Body.style.display = "none";
    Box_Btn_Body.style.display = "none";

   }


};






var Validate_Btn = document.getElementById('Validate_Btn');
var Btn = document.getElementById('Btn');
var ListFilm = document.getElementById('ListFilm');
var Film_Info = document.getElementById('Film_Info');
var ftitle = document.getElementById('ftitle');
var fDate = document.getElementById('fDate');
var fDesc = document.getElementById('fDesc');
var Rating = document.getElementById('Rating');
var Select = document.getElementById('Select_Form');




Validate_Btn.onclick = function() {

    var Div = document.createElement("div");
    var Film_Name = document.createElement("div");
    var Film_Date = document.createElement("div");
    var Film_Desc = document.createElement("div");
    var Rating_tag = document.createElement("div");
   


    var elt = document.querySelector('select');
    elt.addEventListener('change', function () {
    console.log('value => '+this.value);
    })
    

   


    ListFilm.appendChild(Div);
    Div.appendChild(Film_Name);
    Div.appendChild(Film_Date);
    Div.appendChild(Film_Desc);
    Div.appendChild(Rating_tag);


    
    



    Rating_tag.style.width ="112px";
    Rating_tag.style.height = "30px";
    Rating_tag.style.marginTop = "10px";
    Rating_tag.style.fontSize = "20px";
    Rating_tag.style.color = "red";
    Rating_tag.style.paddingLeft = "10px";
    Rating_tag.style.paddingTop = "5px";
    Rating_tag.style.position = "absolute";
    Rating_tag.style.background = "white";
    




    Div.style.width = "300px";
    Div.style.height = "321px";
    Div.style.boxShadow ="0 0 10px 0 rgb(0 0 100 / 20%)";
    Div.style.marginLeft = "20px";
    Div.style.marginTop = "-80px";
    Div.style.marginBottom = "10px";
    Div.style.borderRadius = "20px";
    Div.style.background = "#009688";


    
    

    Film_Name.style.width = "100%";
    Film_Name.style.height = "11%";    
    Film_Name.style.marginTop = "10px";
    Film_Name.innerHTML = ftitle.value;
    Film_Name.style.fontSize = "25px";
    Film_Name.style.color = "red";
    Film_Name.style.textAlign = "center";
    Film_Name.style.background = "transparent";
    Film_Name.style.color = "white";

    Film_Date.style.width = "30%";
    Film_Date.style.height = "10%";    
    Film_Date.style.marginLeft = "85px";
    Film_Date.style.paddingLeft = "12px";
    Film_Date.innerHTML = ("Date Of The Film : " ,fDate.value);
    Film_Date.style.fontSize = "20px";
    Film_Date.style.background = "white";
    Film_Date.style.color = "black";

    Film_Desc.style.width = "97%";
    Film_Desc.style.height = "20%";    
    Film_Desc.style.marginTop = "134px";
    Film_Desc.style.paddingLeft = "10px";
    Film_Desc.innerHTML = ("Description Of The Film : " ,fDesc.value);
    Film_Desc.style.fontSize = "20px";
    Film_Desc.style.background = "white";
    Film_Desc.style.color = "black";


    


    




    if(elt.value === "1")  {

      
      
      Rating_tag.innerHTML = '<i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
    
    
    };
  
     if(elt.value === "2")  {
  
      Rating_tag.innerHTML.background = "white"; 
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
     };
  
     if(elt.value === "3")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     if(elt.value === "4")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     if(elt.value === "5")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     if(elt.value === "6")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     if(elt.value === "7")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     
     if(elt.value === "8")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     
     if(elt.value === "9")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>';
      Rating_tag.innerHTML.background = "white";
     } 
  
     if(elt.value === "10")  {
      Rating_tag.innerHTML = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>';
      Rating_tag.innerHTML.background = "white";
     }     
  





    



    
    ListFilm.style.display = "flex";
    ListFilm.style.justifyContent = "flex-start";
    ListFilm.style.flexWrap = "wrap";
    ListFilm.style.flexDirection = "row";    
    ListFilm.style.display = "flex";
    Header_Body.style.display = "block";
    Box_Btn_Body.style.display = "block";
    Btn.style.display = "block";
    Film_Info.style.display = "none";   


}




function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
 

  reader.onloadend = function () {
    preview.src = reader.result;
    
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}



document.getElementById("Input_Video")
.onchange = function(event) {
  let file = event.target.files[0];
  let blobURL = URL.createObjectURL(file);
  document.querySelector("video").src = blobURL;
}












