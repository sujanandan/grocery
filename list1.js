function ajax(){


    //creating an xhr object
    var xhttp=new XMLHttpRequest();
    //Event Listener
    xhttp.onreadystatechange=function(){
        //condition
        if(this.readyState==4 && this.status==200){
            // document.getElementById("demo").innerHTML=this.responseText
            var response=JSON.parse(this.responseText);

            // console.log(this.responseText);
            // console.log(response);
            // console.log(response.product);
             var product=response.product;
            var output="";
       
            output +="<tr>";
            output +="<th> SNo</th>";
                output +="<th> Name </th>";
                output +="<th> Quantity</th>";
                output +="<th> Unit</th>";
                output +="<th> <select>" +
                "<option value=\"Department\">Department <\/option>" +
                "<option value=\"Grains\">Grains<\/option>" +
                "<option value=\"Veggies\">Veggies<\/option>" +
                "<option value=\"Fruits\">Fruits<\/option>" +
                "<option value=\"Dairy\">Dairy<\/option>" +
                "<option value=\"Toiletries\">Toiletries<\/option>" +
                "<\/select>";

   
                output +="<th> Notes</th>";
                output +="</tr>";
console.log("output"+output);
            for(var i=0;i<product.length;i++){
                output +="<tr>";
                output +="<td> "+ product[i].SNo +"</td>";
                output +="<td> "+ product[i].Name +"</td>";
                output +="<td> "+ product[i].Quantity +"</td>";
                output +="<td> "+ product[i].Unit +"</td>";
                output +="<td> "+ product[i].Dept +"</td>";
                output +="<td> "+ product[i].Notes +"</td>";
                output +="</tr>";

            }
        //    var output1= document.getElementById("tableList").lastChild;
        //     output1.appendChild(output);
            
             document.getElementById("tableList").innerHTML=output;
            //  creating split table

                        
        }

    };
    //instantiating object
    xhttp.open("GET","./list.json",true);
    xhttp.send();
}
    document.addEventListener("change", myFunction);
            
    // document.getElementById("fname").onchange = function() {myFunction()};
    function myFunction() {
        var txtValue,tr,i,td,count=1;
        var x = document.getElementsByTagName("select")[0].value;
        console.log("You have selected"+x);
        var filter = x.toUpperCase();
        table = document.getElementById("tableList");
        console.log("Filter and table" + table);

         tr = table.getElementsByTagName("tr");
         console.log("tr "+tr.length);

         for (i = 1; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          console.log("td"+td);
          if (td) {
          txtValue = td.textContent || td.innerText;
          console.log("txtvalue"+txtValue);
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
           tr[i].style.display = "";
           tr[i].getElementsByTagName("td")[0].innerText=count;
           count++;
        //    console.log("count"+tr[i].SNo.innerText);
           
             } else {
          tr[i].style.display = "none";
         }
     }       
     }
      }    
    
    