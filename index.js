const cowsay = require("cowsay");
const presentation = require("./information");

console.log(
    cowsay.say({
        text: `Hi! I'm ${presentation.name} from the ${presentation.campus} campus`,
        e: "oO",
        T: "U ",
    })
);
