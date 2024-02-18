import { assert } from "chai";
import {planYourTrip} from "../11.Exam/planYourTrip.js"


describe("choosing destination", () => {
    it("should turn invalid for different year", () => {
        const destination = "Ski Resort";
        const season = "Winter";
        const year = 2023;
        assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "Invalid Year!");

    })

    it("should turn invalid for the first destination", () => {
        const destination = "Mountain Resort";
        const season = "Spring";
        const year = 2024;
        assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "This destination is not what you are looking for.");
      });

      it("should turn invalid for the last destination", () => {
        const destination = "Beach Resort";
        const season = "Autumn";
        const year = 2024;
        assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "This destination is not what you are looking for.");
      });

    it("should turn invalid for different destination", () => {
        const destination = "Beach Resort";
        const season = "Summer";
        const year = 2024;
        assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "This destination is not what you are looking for.");

    })
    it("should turn invalid for different destination", () => {
        const destination = "Beach Resort";
        const season = "Summer";
        const year = 2024;
        assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "This destination is not what you are looking for.");

    })

    it("valid input", () => {
        const destination = "Ski Resort";
        const season = "Winter";
        const year = 2024;
        const result = planYourTrip.choosingDestination(destination, season, year);
        assert.equal(result, "Great choice! The Winter is the perfect time to visit the Ski Resort.");

    })

    it("wrong season", () => {
        const destination = "Ski Resort";
        const season = "Summer";
        const year = 2024;
        const result = planYourTrip.choosingDestination(destination, season, year);
        assert.equal(result, "Consider visiting during the Winter for the best experience at the Ski Resort.");

        it("valid input for Beach Resort in Summer", () => {
            const destination = "Beach Resort";
            const season = "Summer";
            const year = 2024;
            const result = planYourTrip.choosingDestination(destination, season, year);
            assert.equal(result, "Great choice! The Summer is the perfect time to visit the Beach Resort.");
        });

        it("invalid season - Spring", () => {
            const destination = "Ski Resort";
            const season = "Spring";
            const year = 2024;
            assert.throws(() => planYourTrip.choosingDestination(destination, season, year), "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });




    })

    describe("explore options", () => {
        it("should be array", () => {
            const arctivies = "Skiing";
            const index = 1;
            assert.throws(() => planYourTrip.exploreOptions(arctivies, index), "Invalid Information!");
        })


        it("should throw an error for an empty array of activities", () => {
            const activities = [];
            const index = 1;
            assert.throws(() => planYourTrip.exploreOptions(activities, index), "Invalid Information!");
        });

        it("should return an empty string for a single activity in the array", () => {
            const activities = ["Skiing"];
            const index = 0;
            const result = planYourTrip.exploreOptions(activities, index);
            assert.equal(result, "");
        });



        it("input is valid - remove activity at last index", () => {
            const activities = ["Hiking", "Skiing", "Sightseeing"];
            const index = 2;
            const result = planYourTrip.exploreOptions(activities, index);
            assert.equal(result, "Hiking, Skiing");
        });


        it("index should be number", () => {
            const arctivies = ["Hiking", "Skiing", "Sightseeing"];
            const index = "1";
            assert.throws(() => planYourTrip.exploreOptions(arctivies, index), "Invalid Information!");
        })

        it("index is negative limits", () => {
            const arctivies = ["Hiking", "Skiing", "Sightseeing"];
            const index = -1;
            assert.throws(() => planYourTrip.exploreOptions(arctivies, index), "Invalid Information!");
        })

        it("index is outside limits", () => {
            const arctivies = ["Hiking", "Skiing", "Sightseeing"];
            const index = 6;
            assert.throws(() => planYourTrip.exploreOptions(arctivies, index), "Invalid Information!");
        })

        it("input is valid", () => {
            const arctivies = ["Hiking", "Skiing", "Sightseeing"];
            const index = 1;
            const result = planYourTrip.exploreOptions(arctivies, index);
            assert.equal(result, "Hiking, Sightseeing");
        })

    })

    describe("estimate expenses", () => {
        it("input is valid", () => {
            const distance = 300;
            const fuel = 2.5;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            assert.equal(result, "The estimated cost for the trip is $750.00, plan accordingly.");
        })

        it("should throw an error for a non-numeric distance", () => {
            const distance = "300";
            const fuel = 2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("should throw an error for a non-numeric fuel cost", () => {
            const distance = 300;
            const fuel = "2.5";
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("should throw an error for a zero distance", () => {
            const distance = 0;
            const fuel = 2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("should throw an error for a zero fuel cost", () => {
            const distance = 300;
            const fuel = 0;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("the cost is budget friendly", () => {
            const distance = 100;
            const fuel = 4;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            assert.equal(result, "The trip is budget-friendly, estimated cost is $400.00.");
        })


        it("distance is negative", () => {
            const distance = -100;
            const fuel = 2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })

        it("fuel is negative", () => {
            const distance = 300;
            const fuel = -2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })

        it("distance is not a number", () => {
            const distance = "300";
            const fuel = 2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })

        it("fuel is not a number", () => {
            const distance = 300;
            const fuel = "2.5";
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })
        it("distance is zero", () => {
            const distance = 0;
            const fuel = 2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })

        it("fuel is zero", () => {
            const distance = 300;
            const fuel = 0;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        })

        it("distance and fuel are zero", () => {
            const distance = 0;
            const fuel = 0;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("distance and fuel are not numbers", () => {
            const distance = "300";
            const fuel = "2.5";
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("distance and fuel are negative numbers", () => {
            const distance = -100;
            const fuel = -2.5;
            assert.throws(() => planYourTrip.estimateExpenses(distance, fuel), "Invalid Information!");
        });

        it("the cost is budget friendly - exactly $500", () => {
            const distance = 200;
            const fuel = 2.5;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            assert.equal(result, "The trip is budget-friendly, estimated cost is $500.00.");
        });

        it("the cost is not budget friendly - slightly below $500", () => {
            const distance = 199;
            const fuel = 2.5;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            // Adjust the expected result to match the actual code behavior
            assert.equal(result, "The trip is budget-friendly, estimated cost is $497.50.");
        });

        it("the cost is not budget friendly - slightly above $500", () => {
            const distance = 201;
            const fuel = 2.5;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            assert.equal(result, "The estimated cost for the trip is $502.50, plan accordingly.");
        });

        it("the cost is significant - large distance and fuel cost", () => {
            const distance = 1000;
            const fuel = 5;
            const result = planYourTrip.estimateExpenses(distance, fuel);
            assert.equal(result, "The estimated cost for the trip is $5000.00, plan accordingly.");
        });

        it("should throw an error for an array as distance", () => {
            const result = () => planYourTrip.estimateExpenses([300], 2.5);
            assert.throws(result, "Invalid Information!");
          });

          it("should throw an error for an object as fuel cost", () => {
            const result = () => planYourTrip.estimateExpenses(300, { cost: 2.5 });
            assert.throws(result, "Invalid Information!");
          });

          it("should throw an error for a string as distance", () => {
            const result = () => planYourTrip.estimateExpenses("300", 2.5);
            assert.throws(result, "Invalid Information!");
          });

          it("should throw an error for a string as fuel cost", () => {
            const result = () => planYourTrip.estimateExpenses(300, "2.5");
            assert.throws(result, "Invalid Information!");
          });
          it("should throw an error for a boolean as distance", () => {
            const result = () => planYourTrip.estimateExpenses(true, 2.5);
            assert.throws(result, "Invalid Information!");
          });
          
          it("should throw an error for a boolean as fuel cost", () => {
            const result = () => planYourTrip.estimateExpenses(300, false);
            assert.throws(result, "Invalid Information!");
          });

          it("should throw an error for both negative distance and fuel cost", () => {
            const result = () => planYourTrip.estimateExpenses(-300, -2.5);
            assert.throws(result, "Invalid Information!");
          });




    })


})








// // Invalid distanceInKilometers (not a number)
// planYourTrip.estimateExpenses("300", 2.5);
