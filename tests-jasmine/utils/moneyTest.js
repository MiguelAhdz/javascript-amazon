import {formatCurrency} from '../../scripts/utils/money.js';

describe('formatCurrency', () => {
    it('should convert cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('should work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('should round up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('should round down to the nearest cent', () => {
        expect(formatCurrency(2000.3)).toEqual('20.00');
    });
});
