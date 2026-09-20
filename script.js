let Name = prompt("Please Enter Your Name");

let Age =prompt("Please Enter Your Age");

let Gender = prompt("Please Enter Your Gender (Female/Male)");

let isAvailable = true;

let orderStatus = "";


if(Gender == "Female"){

    alert("Welcome Ms. " + Name);

}else if(Gender == "Male"){

    alert("Welcome Mr. " + Name);

}else{

    alert("Welcome " + Name);

}


if(Age < 16){

    alert("You are not eligible to place an order");

}else{

    alert("Continue with the order");

    let order = prompt("Please choose from this option (Burger/Shawarma/Zinger)");


    if(order == "Burger" || order == "Shawarma" || order == "Zinger"){

        isAvailable = true;

        alert("Your order is being prepared");

    }else{

        isAvailable = false;

        alert("Invalid order. Please try again");

    }


    if(Age >= 18 && isAvailable){

        alert("Order confirmed");

        orderStatus = "Order confirmed";

    }else{

        alert("Order requires verification");

        orderStatus = "Order requires verification";
    }


    console.log("Customer name: ", Name);
    console.log("Customer age: ", Age);
    console.log("Customer gender: ", Gender);
    console.log("Customer order: ", order);


    document.write("Your name: " + Name + "<br>");
    document.write("Your age: " + Age + "<br>");
    document.write("Your gender: " + Gender + "<br>");
    document.write("Your order: " + order + "<br>");
    document.write("Your order status: " + orderStatus);
}