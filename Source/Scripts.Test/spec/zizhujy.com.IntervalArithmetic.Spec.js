///<reference path="/../../Source/zizhujy.com.IntervalArithmetic.js"/>
///<reference path="/lib/jasmine/jasmine.js"/>

describe("zizhujy.com.IntervalArithmetic test suite", function () {
    var IA = IntervalArithmetic;

    it("Spec: greater than", function() {
        expect(IA.greaterThan({ val: [1, 4], def: [true, true] }, { val: [0, 0.5], def: [true, true] }))
            .toEqual({ val: [true, true], def: [true, true] });

        expect(IA.greaterThan({ val: [1, 4], def: [true, true] }, { val: [0, 2], def: [true, true] }))
              .toEqual({ val: [false, true], def: [true, true] });

        expect(IA.greaterThan({ val: [1, 4], def: [true, true] }, { val: [1, 4], def: [true, true] }))
            .toEqual({ val: [false, false], def: [true, true] });
    });

    it("Spec: equals can compare if two intervals are equal.", function () {
        expect(IA.equals({ val: [1, 4], def: [true, true] }, { val: [1, 4], def: [true, true] }))
            .toEqual({ val: [true, true], def: [true, true] });
        
        expect(IA.equals({ val: [1, 4], def: [true, true] }, { val: [2, 3], def: [true, true] }))
            .toEqual({ val: [false, true], def: [true, true] });
    });
});
