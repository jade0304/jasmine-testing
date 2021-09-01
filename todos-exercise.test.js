it ('should calculate high-tax bracket', function() {
  expect(calculateTaxes(50000)).toEqual(12500);
  expect(calculateTaxes(100000)).toEqual(25000);
});
it ('should calculate low-tax bracket', function(){
  expect(calculateTaxes(10000)).toEqual(1500);
  expect(calculateTaxes(1000)).toEqual(150);
  expect(calculateTaxes(0)).toEqual(0);

})

it ('should remove duplicates from an array', function () {
  expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]); 
})

it ('should remove duplicates from a string', function() {
  expect(removeDupes('hello')).toEqual('helo'); 
})