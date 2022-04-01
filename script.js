//Creating an input HTML element by Using DOM that is used to enter brand name
var ele=document.createElement("input");
ele.setAttribute("type","search");
ele.setAttribute("name"," ");
ele.setAttribute("id","search");
ele.setAttribute("placeholder","Enter the Brand");
document.body.append(ele);
//Creating an Button HTML element by Using DOM it is useful to get into the site what we are looking for
var button=document.createElement("button");
button.addEventListener("click",makeup);
button.innerHTML="Search";
document.body.append(button);
//async and await is used for making easier to write the code
async function makeup(){
let res=document.getElementById("search").value;
  console.log(res);
//Try catch block is used to handle errors in async and await
  try {
  let result=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${res}`);
  let final=await result.json();
  console.log(final);
  //For loop and template literal approach is used to get the desired output
  for(var i=0;i<final.length;i++){
    let ele=document.createElement("div");
    ele.innerHTML=`Brand:${final[i].brand}
     name:${final[i].name}
      price:${final[i].price}
       image_link:${final[i].image_link}
        product_link:${final[i].product_link}
         description:${final[i].description}`;
    document.body.append(ele);
}  
} catch (error) {
  console.log(error);
}
}