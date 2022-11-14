var drinkList=new Array();
var drinkListQuantiity=new Array();
var food=["Hot dog","Veg Burger","pasta","Sandwich","Spagetti","Noodles","Pizza","Spring Roll"];
var drink=["Sprite","Pepsi","Diet Coke","Mojito","Cappuccino","CocaCOla","Cold Coffee","Fanta"];
var drinkPrice=[20,20,35,45,45,20,60,20];
var foodPrice=[150,75,85,168,90,189,200,180];
var foodList=new Array();
var foodListQuantiity=new Array();
var s="";
var arr=new Array();
var counter=0;
var total=0;
var table = document.getElementById("list");

function calc(){
    for(let i=1;i<=8;i++){
        let c=`L${i}`;
        let d=`M${i}`;
        //console.log(c);
        var a =document.getElementById(c);
        var b =document.getElementById(d);
        if(a.checked == true){
            drinkList[i-1]=1;
            drinkListQuantiity[i-1] = Number(document.getElementById(`${c}i`).value);
            s+=drinkListQuantiity[i-1]+"*"+drink[i-1]+":   Rs."+drinkListQuantiity[i-1]*drinkPrice[i-1]+'\n';
            arr[counter]=drinkListQuantiity[i-1]+"*"+drink[i-1]+":   Rs."+drinkListQuantiity[i-1]*drinkPrice[i-1];
            counter++;
            total+=drinkListQuantiity[i-1]*drinkPrice[i-1];
            //console.log('cheked');
        }
        else{
            drinkList[i-1]=0;
            drinkListQuantiity[i-1] = 0;

        }
        if(b.checked == true){
            foodList[i-1]=1;
            foodListQuantiity[i-1] = Number(document.getElementById(`${d}j`).value);
            //console.log(k);
            //console.log('cheked');
            s+=foodListQuantiity[i-1]+"*"+food[i-1]+":   Rs."+foodListQuantiity[i-1]*foodPrice[i-1]+"\n";
            arr[counter]=foodListQuantiity[i-1]+"*"+food[i-1]+": Rs."+foodListQuantiity[i-1]*foodPrice[i-1];
            counter++;
            total+=foodListQuantiity[i-1]*foodPrice[i-1];
        }
        else{
            foodList[i-1]=0;
            foodListQuantiity[i-1] = 0;

        }
        
 /*var a=document.getElementById("/L.$/");
    if(a.checked == true){
        console.log("Checked");
    }*/
}

var gst=0.05*total
document.getElementById('gst').value =gst ;
var service=Number(document.getElementById('service').value);

var sub=gst+service;
total+=sub;
s+=`service charge:   ${service}\nGST:   ${gst}\nTotal:   ${total}`;
document.getElementById('hello').value=total;
document.getElementById("finals").value=s;
//printDiv()
console.log(arr);
}
for(let i=1;i<arr.length ; i++){
    var row = table.insertRow(i);
    var cell = row.insertCell(0);
    cell.innerHTML = arr[i];
}

function clr(){
    
    for(let i=1;i<=8;i++){
        let a=`L${i}`;
        let b=`L${i}i`;
        let c=`M${i}`;
        let d=`M${i}j`;
        document.getElementById(a).checked=false;
        document.getElementById(b).value='';
        document.getElementById(c).checked=false;
        document.getElementById(d).value='';
        document.getElementById("finals").value="";
        document.getElementById('gst').value='';
        document.getElementById('service').value='';
        document.getElementById('hello').value='';
        //console.log(a)  
        s=''
        total=0
        
}


}

function print() {
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Bills <br>');
    a.document.write(s);
    a.document.write('</body></html>');
    a.document.close();
   // a.print();
}
