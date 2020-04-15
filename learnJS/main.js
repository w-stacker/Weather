var apple = new Object();
apple.color = 'red';
apple.shape =  'round';

apple.describe = function(){
    return 'An apple is the color '+this.color+' and is the shape '+this.shape;

}

console.log(apple.describe());