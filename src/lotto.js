const API = {
    lotto(number) {
        let arr = [];
        for (let i = 0; i < number; i++) {
            arr[i] = API.generateRandomNumber();
        }
        return arr;
    },

    generateRandomNumber(min = 0, max = 81) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

module.exports = API;
