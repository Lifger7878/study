const questions = [
    "Продовжіть рядок (Батько наш Бендера...",
    "На що збирав гроші Притула?",
    "Як привітатися україно-англіським суржиком?",
    "Слава",
    "Слава",
    "Смерть",
    "Україна",
];
const answers = [  
'Україна - мати',
'на Байрактари',
'Добрий день еврібаді',
'Україні',
'нації',
'ворогам',
'понад усе',
];
let errorscounter = 0;

for (i = 0; i < 7; i = i +1) {
const responce = prompt(questions[i]);
if (
    responce === "Россия" ||
    responce === "Росія" ||
    responce === "Путін" ||
    responce === "Путин"
) {
    alert ("Go fuck your self");
    while (true){}
}

if (responce !== answers[i]) {
    if (errorscounter > 0){
    break;
}
    else {
    errorscounter = errorscounter + 1;
}
}
}















//const responce1= prompt ("Продовжіть рядок (Батько наш Бендера...");
//if(responce1 === 'Україна - мати'){

//    const responce2= prompt ("На що збирав гроші Притула?");
 //   if(responce2 === 'на Байрактари') {
        
//        const responce3= prompt ("Як привітатися україно-англіським суржиком?");
//        if(responce3 === 'Добрий день еврібаді') {
            
 //           const responce4= prompt ("Слава");
 //           if(responce4 === 'Україні') {
                
 //               const responce5= prompt ("Слава");
  //              if(responce5 === 'нації') {
  //                  
   //                 const responce6= prompt ("Смерть");
  //                  if(responce6 === 'ворогам') {
                        
  //                      const responce7= prompt ("Україна");
  //                      if(responce7 === 'понад усе') {
   //                         alert("ти пройшов тест!");
  //                      }else {
   //                         alert ('ти не пройшов!!!')
   //                         }
                        
   //                 } else {
   //                     alert ('ти не пройшов!!!')
   //                     }
   //             } else {
    //                alert ('ти не пройшов!!!')
    //                }
    //        } else {
   //             alert ('ти не пройшов!!!')
   //             }
   //     } else {
   //         alert ('ти не пройшов!!!')
  //          }
 //   } else {
//        alert ('ти не пройшов!!!')
//        }
//} else {
//alert ('ти не пройшов!!!')
//}