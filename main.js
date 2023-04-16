function product() {  
    const productName = prompt("Enter product name");  
    const unitePrice =  prompt("Enter unite price");  
    const quantity =  prompt("Enter quantity"); 
    const participates=  prompt("Participates in the promotion or not ");  
    const discount  = unitePrice * 0.1 
    if (  quantity>= 5) { 
       console.log(discount); 
    }  
     const discount2 = unitePrice * 0.15
    if ( participates == "yes") { 
      console.log(discount2); 
       
    }else if ( participates == "no"){ 
      console.log(unitePrice) 
    } 
  }  
   
  const customerInfo = product();  
  console.log(customerInfo);


  