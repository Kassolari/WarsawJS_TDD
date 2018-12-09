module.exports = {
    tree(pom, znak = '*') {
    
        let tre = "";
        for (let a = 1; a <= pom; a++) {
            tre += znak.repeat(a);
            if (a >= 1 && a < pom) {
                tre += "\n";
            }
        }
        console.log(tre);
        return tre;
    }
};
