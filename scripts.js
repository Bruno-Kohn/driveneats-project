let number = 0;

function selectPlate(plate) {    
    const element = document.querySelector('.plates .selected');

    if(element !== null) {        
        element.classList.remove("selected");
        number--;
    }

    const clickedPlate = document.querySelector(plate);
    clickedPlate.classList.add("selected");
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
    sumNumber();
}

function sumNumber() {
    number++;
    console.log(number);
}



