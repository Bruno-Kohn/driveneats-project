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
let finalPrice;

function selectPlate(selected) {    
    const element = document.querySelector('.plates .selected');
    

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    selected.classList.add("selected");    
    selectedPlateName = selected.querySelector(".first-description").innerHTML;  
    console.log(selectedPlateName);
    checkPlatePrice = selected.querySelector(".price").innerHTML;  
    console.log(checkPlatePrice);
    selectedPlatePrice = parseFloat(checkPlatePrice.replace("R$", "").replace(",","."));
    console.log(selectedPlatePrice);
    sumNumber();
}

function selectBeverage(selected) {    
    const element = document.querySelector('.beverages .selected');

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    selected.classList.add("selected");    
    selectedBeverageName = selected.querySelector(".first-description").innerHTML;  
    console.log(selectedBeverageName);
    checkBeveragePrice = selected.querySelector(".price").innerHTML;  
    console.log(checkBeveragePrice);
    selectedBeveragePrice = parseFloat(checkBeveragePrice.replace("R$", "").replace(",","."));
    console.log(selectedBeveragePrice);
    sumNumber();
}

function selectDessert(selected) {    
    const element = document.querySelector('.desserts .selected');

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    selected.classList.add("selected");    
    selectedDessertName = selected.querySelector(".first-description").innerHTML;  
    console.log(selectedDessertName);
    checkDessertPrice = selected.querySelector(".price").innerHTML;  
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
        finalPrice = totalPrice.toFixed(2);
        console.log(finalPrice); 
    }
}

function toOrderCombo() {
    if(number === 3) {
        const blur = document.querySelector('body ');
        blur.classList.add("blur");
    }
}



