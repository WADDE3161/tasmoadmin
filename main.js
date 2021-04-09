<script>  
 if(typeof(Storage)!=="undefined") {  
  localStorage.setItem("name","Harshita");  
  localStorage.setItem("Country", "India");  
   document.write("Hi"+" "+localStorage.name+" "+"from" +" "+ localStorage.Country);  
}  
 else{  
  alert("Sorry! your browser is not supporting the browser")  
 }  
</script>
