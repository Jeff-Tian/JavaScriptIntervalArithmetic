///<reference path="/../../Source/zizhujy.com.IntervalArithmetic.js"/>
///<reference path="/lib/jasmine/jasmine.js"/>

describe("zizhujy.com.IntervalArithmetic test suite", function () {
    var IA = IntervalArithmetic;

    it("Spec: greater than", function () {
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

    it("Spec: multiple 2 intervals. ", function () {
        expect(IA.multiply({ val: [1, 4], def: [true, true] }, { val: [2, 3], def: [true, true] }))
            .toEqual({ val: [2, 12], def: [true, true] });

        expect(IA.multiply({ val: [1, 4], def: [true, true] }, { val: [2, 3], def: [false, true] }))
            .toEqual({ val: [2, 12], def: [false, true] });

        expect(IA.multiply({ val: [1, 4], def: [true, true] }, { val: [2, 3], def: [true, false] }))
            .toEqual({ val: [2, 12], def: [true, false] });

        expect(IA.multiply({ val: [1, 4], def: [true, true] }, { val: [2, 3], def: [false, false] }))
            .toEqual({ val: [2, 12], def: [false, false] });

        expect(IA.multiply({ val: [2, 6], def: [true, true] }, { val: [3, 4], def: [true, true] })).toEqual({ val: [6, 24], def: [true, true] });
    })
});
