function product() {
    const productName = ("Enter product name");
    const unitePrice = ("Enter unite price");
     const quantity = ("Enter quantity");
     const participates =("Participates in the promotion or not ");
   const discount = unitePrice * 0.1
     if (quantity >= 5) {
       return (discount);
     }
     const discount2 = unitePrice * 0.15;   
 const bothDiscount = unitePrice * 0.25
     if (participates == "yes") {
        return (discount2);

     } else if (participates == "no") {/ return console.log(unitePrice)
     }else{
        return (bothDiscount)
    }
 }
 product();
