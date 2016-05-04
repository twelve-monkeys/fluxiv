/// <reference path="jasmine.d.ts" />

import {Action } from "../Action";

describe("an action", () => {
    var action: Action;
    describe("if a completely empty object", () => {
        beforeEach(() => {
            action = <any>{};
        });
        it("will be empty", () => {
            expect(action.name).toBeUndefined();
            expect(action.value).toBeUndefined();
        });
    })
});

export const include = true;