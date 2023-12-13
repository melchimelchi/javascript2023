let date = new Date();

console.log(date);

date.setFullTear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);

console.log(date);