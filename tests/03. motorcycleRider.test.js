import { assert, expect } from "chai";

import { motorcycleRider } from "../09. Exam Preparation/03.Motorcycle Rider -Resources/Motorcycle Rider.js"

describe('motorcycleRider', () => {
    describe('licenseRestriction', () => {
        it('should return the correct message for category "AM"', () => {

            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });

    }); it('should return the correct message for category "A1"', () => {

        expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
    });
    it('should return the correct message for category "A2"', () => {

        expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
    });
    it('should return the correct message for category "A"', () => {

        expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.")
    });
    it('should return the correct message for category Other', () => {
        expect(() => motorcycleRider.licenseRestriction("type")).to.throw("Invalid Information!");
    });

    describe('motorcycleShowroom', () => {
        it('should return the correct message for valid input', () => {
            const engineVolume = [60, 70, 80, 90];
            const maximumEngineVolume = 100;

            const result = motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume);

            expect(result).to.equal('There are 4 available motorcycles matching your criteria!');
        });
        it('should throw an error for invalid input - not an array', () => {
            const engineVolume = "notAnArray";
            const maximumEngineVolume = 100;

            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw("Invalid Information!");
        });
        it('should throw an error for invalid input - invalid maximumEngineVolume', () => {
            const engineVolume = [60, 70, 80, 90];
            const maximumEngineVolume = "invalidNumber";

            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw("Invalid Information!");
        });
        it('should throw an error for invalid input - empty array', () => {
            const engineVolume = [];
            const maximumEngineVolume = 100;

            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw("Invalid Information!");
        });

        it('should throw an error for invalid input - maximumEngineVolume < 50', () => {
            const engineVolume = [60, 70, 80, 90];
            const maximumEngineVolume = 40;

            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw("Invalid Information!");
        });


        describe('motorcycleRider', () => {
            describe('otherSpendings', () => {
                it('should return the correct message with discount for valid input', () => {
                    const equipment = ["helmet", "jacket"];
                    const consumables = ["engine oil", "oil filter"];
                    const discount = true;

                    const result = motorcycleRider.otherSpendings(equipment, consumables, discount);

                    expect(result).to.equal('You spend $270.00 for equipment and consumables with 10% discount!');
                });

                it('should return the correct message without discount for valid input', () => {
                    const equipment = ["helmet"];
                    const consumables = ["engine oil"];
                    const discount = false;

                    const result = motorcycleRider.otherSpendings(equipment, consumables, discount);

                    expect(result).to.equal('You spend $270.00 for equipment and consumables!');
                });

                it('should throw an error for invalid input - not an array for equipment', () => {
                    const equipment = "notAnArray";
                    const consumables = ["engine oil"];
                    const discount = true;

                    expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw("Invalid Information!");
                });
                it('should throw an error for invalid input - not an array for consumables', () => {
                    const equipment = ["helmet"]
                    const consumables = "notAnArray";
                    const discount = true;

                    expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw("Invalid Information!");
                });

                it('should throw an error for invalid input - not an array for discount', () => {
                    const equipment = ["helmet"]
                    const consumables = ["engine oil"];
                    const discount = "true";

                    expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw("Invalid Information!");
                });

            });
        });
    });
});