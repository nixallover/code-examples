var fruit = {
    edible: true,
    sweet: true
};

var banana = new Object(fruit);

banana.color = 'yellow';
banana.shape = 'crescent';

console.log(banana);

console.log('color in banana: ', 'color' in banana);
console.log('edible in banana: ', 'edible' in banana);

for(var prop in banana){
    console.log(prop);
}