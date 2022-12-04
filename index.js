const userInfo = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `hello i'm ${userInfo.myName} from ${userInfo.campus} campus!`,
    e : "oO", 
    T : "U",
}
));