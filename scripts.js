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
let customer;
let adress;

function selectPlate(selected) {    
    const element = document.querySelector('.plates .selected');
    

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    selected.classList.add("selected");    
    selectedPlateName = selected.querySelector(".first-description").innerHTML;
    checkPlatePrice = selected.querySelector(".price").innerHTML;
    selectedPlatePrice = parseFloat(checkPlatePrice.replace("R$", "").replace(",","."));
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
    checkBeveragePrice = selected.querySelector(".price").innerHTML;
    selectedBeveragePrice = parseFloat(checkBeveragePrice.replace("R$", "").replace(",","."));
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
    checkDessertPrice = selected.querySelector(".price").innerHTML;
    selectedDessertPrice = parseFloat(checkDessertPrice.replace("R$", "").replace(",","."));
    sumNumber();  
}

function sumNumber() {
    number++;
    if(number === 3) {        
        const button = document.querySelector('button');
        button.classList.add("check");
        button.innerHTML = "Fechar pedido";             
    }

    if(selectedPlatePrice !== undefined && selectedBeveragePrice !== undefined && selectedDessertPrice !== undefined) {
        totalPrice = selectedPlatePrice + selectedBeveragePrice + selectedDessertPrice;
        finalPrice = totalPrice.toFixed(2);
    }
}

function toOrderCombo() {
    if(number === 3) {
        customer = prompt("Digite seu nome: ");
        adress = prompt("Digite seu endere??o: ");
        const confirmation = document.querySelector(".backdrop-background");
        confirmation.classList.remove("hidden");
        const modal = document.querySelector(".modal-confirm-ordering");
        modal.classList.remove("hidden");
        const orderedPlate = document.querySelector(".orderedPlate");
        orderedPlate.innerHTML = selectedPlateName;
        const orderedPlatePrice = document.querySelector(".orderedPlatePrice");
        orderedPlatePrice.innerHTML = checkPlatePrice;
        const orderedBeverage = document.querySelector(".orderedBeverage");
        orderedBeverage.innerHTML = selectedBeverageName;
        const orderedBeveragePrice = document.querySelector(".orderedBeveragePrice");
        orderedBeveragePrice.innerHTML = checkBeveragePrice;
        const orderedDessert = document.querySelector(".orderedDessert");
        orderedDessert.innerHTML = selectedDessertName;
        const orderedDessertPrice = document.querySelector(".orderedDessertPrice");
        orderedDessertPrice.innerHTML = checkDessertPrice;
        const finalPriceOrdered = document.querySelector(".finalPriceOrdered");
        finalPriceOrdered.innerHTML = "R$" + finalPrice;
    }
}

function backToOrder() {
        const confirmation = document.querySelector(".backdrop-background");
        confirmation.classList.add("hidden");
        const modal = document.querySelector(".modal-confirm-ordering");
        modal.classList.add("hidden");
}

function sendMessage() {
    const message = `
    Ol??, gostaria de fazer o pedido:
    - Prato: ${selectedPlateName}
    - Bebida: ${selectedBeverageName}
    - Sobremesa: ${selectedDessertName}    
    Total: R$${finalPrice}

    Nome: ${customer}
    Endere??o: ${adress}
    `

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/5521981037125?text=${encodedMessage}`);
}


