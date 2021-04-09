<script>  
 if(typeof(Storage)!=="undefined") {  
  localStorage.setItem("lname","H");  
  localStorage.setItem("fname", "I");  
   document.write("Hi"+" "+localStorage.name+" "+"from" +" "+ localStorage.Country);  
}  
 else{  
  alert("Sorry! your browser is not supporting the browser")  
 }  
</script>
