"use strict";

const testRepository = {
    testMethod: async () => {
        return new Promise(async (resolve, reject) => {
            resolve({
                brand: "Samsung",
                uuid: "5189888e-8f73-4324-a378-09f0849ae7cb",
                model: "FGH-3001"
            })
        });
    }
};

module.exports = testRepository;
