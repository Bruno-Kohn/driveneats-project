let number = 0;
let selectedPlateName;
let checkPlatePrice;
let selectedPlatePrice;
let selectedBeverageName;
let checkBeveragePrice;
let selectedBeveragePrice;
let selectedDessertName;
let checkDessertPrice;
let selectedDessertPrice;
let totalPrice;

function selectPlate(plate) {    
    const element = document.querySelector('.plates .selected');
    

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    const clickedPlate = document.querySelector(plate);
    clickedPlate.classList.add("selected");    
    selectedPlateName = clickedPlate.querySelector(".first-description").innerHTML;  
    console.log(selectedPlateName);
    checkPlatePrice = clickedPlate.querySelector(".price").innerHTML;  
    console.log(checkPlatePrice);
    selectedPlatePrice = parseFloat(checkPlatePrice.replace("R$", "").replace(",","."));
    console.log(selectedPlatePrice);
    sumNumber();
}

function selectBeverage(beverage) {    
    const element = document.querySelector('.beverages .selected');

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    const clickedBeverage = document.querySelector(beverage);
    clickedBeverage.classList.add("selected");    
    selectedBeverageName = clickedBeverage.querySelector(".first-description").innerHTML;  
    console.log(selectedBeverageName);
    checkBeveragePrice = clickedBeverage.querySelector(".price").innerHTML;  
    console.log(checkBeveragePrice);
    selectedBeveragePrice = parseFloat(checkBeveragePrice.replace("R$", "").replace(",","."));
    console.log(selectedBeveragePrice);
    sumNumber();
}

function selectDessert(dessert) {    
    const element = document.querySelector('.desserts .selected');

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    const clickedDessert = document.querySelector(dessert);
    clickedDessert.classList.add("selected");    
    selectedDessertName = clickedDessert.querySelector(".first-description").innerHTML;  
    console.log(selectedDessertName);
    checkDessertPrice = clickedDessert.querySelector(".price").innerHTML;  
    console.log(checkDessertPrice);
    selectedDessertPrice = parseFloat(checkDessertPrice.replace("R$", "").replace(",","."));
    console.log(selectedDessertPrice);  
    sumNumber();  
}

function sumNumber() {
    number++;
    console.log(number);
    if(number === 3) {        
        const button = document.querySelector('button');
        button.classList.add("check");
        button.innerHTML = "Fechar pedido";             
    }

    if(selectedPlatePrice !== undefined && selectedBeveragePrice !== undefined && selectedDessertPrice !== undefined) {
        totalPrice = selectedPlatePrice + selectedBeveragePrice + selectedDessertPrice;
        console.log(totalPrice); 
    }
}

function toOrderCombo() {
    if(number === 3) {
        alert("Jogar para o Whatsapp!");
    }
}



