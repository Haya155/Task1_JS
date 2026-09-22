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

// ------------------------------------------Menu

let menu = [
        {
            name: "Burger",
            price: 5,
            category: "Fast Food",
            available: true
        },
        {
            name: "Shawarma",
            price: 2,
            category: "Fast Food",
            available: true
        },
        {
            name: "Zinger",
            price: 4,
            category: "Fast Food",
            available: false 
        },
        {
            name: "Pizza",
            price: 3,
            category: "Italian Food",
            available: true
        },
        {
            name: "Pasta",
            price: 4,
            category: "Italian Food",
            available: true
        }
    ];

    // ------------------------------------------ Show Menu Function (Group 3 & 6)

    function showMenu() {
        for (let i = 0; i < menu.length; i++) {
            console.log(menu[i].name, menu[i].price, menu[i].category);
        }
    }

    showMenu();


    // ------------------------------------------ Choose Food with Loop (Group 5)

    let orderFood = prompt("Please choose a food (Burger, Shawarma, Zinger, Pizza, Pasta)");
    let selectedFood = null;

    while (selectedFood == null) {

        for (let i = 0; i < menu.length; i++) {

            if (menu[i].available == false) {
                continue;
            }

            if (menu[i].name == orderFood) {
                selectedFood = menu[i];
                break;
            }
        }

        if (selectedFood == null) {
            alert("Invalid or unavailable food. Please try again.");
            orderFood = prompt("Please choose a food (Burger, Shawarma, Zinger, Pizza, Pasta)");
        }
    }


    console.log("Selected Food Properties:");
    for (let property in selectedFood) {
        console.log(property + ": " + selectedFood[property]);
    }


    function calculatePrice(price) {
        let quantity = prompt("Please enter quantity");
        let totalPrice = price * quantity;
        
        return {
            quantity: quantity,
            totalPrice: totalPrice
        };
    }

    let result = calculatePrice(selectedFood.price);


    document.write("Food: " + selectedFood.name + "<br>");
    document.write("Category: " + selectedFood.category + "<br>");
    document.write("Price:" + selectedFood.price +"JD"+ "<br>");
    document.write("Quantity: " + result.quantity + "<br>");
    document.write("Total Price:" + result.totalPrice +"JD");
