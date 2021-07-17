import './exampleimport ';
import './utils.js';
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

test('add should take in 5 and 3 and return 8', (expect) => {
    const expected = 8;
    const actual = add(5, 3);
    expect.equal(actual, expected);
});

test('subtract should take in 5 and 3 and return 2', (expect) => {
    const expected = 2; 
    const actual = subtract(5, 3);
    expect.equal(actual, expected);
});

test ('divide should take in 4 and 2 and return 2', (expect) => {
    const expected = 2; 
    const actual = divide(4, 2); 
    expect.equal(actual, expected);
});

test ('multiply should take in 5 and 2 and return 10', (expect)=>{
    const expected = 10; 
    const actual = multiply(5, 2); 
    expect.equal(actual, expected); 
})