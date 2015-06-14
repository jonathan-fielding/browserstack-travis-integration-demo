test("isEven returns true for even numbers", function(){
    ok(isEven(10), "10 is even");
});

test("isEven returns false for odd numbers", function(){
    notOk(isEven(5), "5 is odd");
});