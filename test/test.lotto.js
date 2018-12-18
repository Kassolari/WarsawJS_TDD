'use strict';

const { expect } = require('chai');

const { lotto } = require('../src/lotto');

describe.skip('General', () => {
    it('should be defined', () => {
        expect(typeof lotto).to.be.equal('function');
    });
    it('should return array of 5', () => {
        const tableArr = lotto(5);
        expect(tableArr.length).to.be.equals(5);
    });
    it('check element smaller than 82', () => {
        const tableArr = lotto(5);
        console.log(tableArr);
        for (let i = 0; i < tableArr.length; i++) {
            expect(tableArr[i]).to.be.at.least(0);
            expect(tableArr[i]).to.be.at.most(81);
        }
    });
});
