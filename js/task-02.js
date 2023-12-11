let targetDestroed = 0;
while (confirm("Бажаєте увести кількість кражених цілей?")){

    
    let number = prompt("Скільки цілей уражено?");
    while(isNaN(+number) || number=== null){
        alert("Введіть число!");
        number = prompt("Число");
    }
    targetDestroed += +number;
}
if (targetDestroed > 0){

    alert('Кількість уражених цілей = ' + targetDestroed);
}