const isNumber = require('./main')

test('checks if 1 is a number', ()=>{
    expect(isNumber("1")).toBe(true);
})

test('checks if one is a number', ()=>{
    expect(isNumber("one")).toBe(false);
})

test('checks if 1ben is a number', ()=>{
    expect(isNumber("1ben")).toBe(false);
})
test('checks if "" is a number', ()=>{
    expect(isNumber("")).toBe(false);
})