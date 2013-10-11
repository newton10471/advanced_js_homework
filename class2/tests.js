test("Test framework sanity check", function() {
  ok( 1 == "1", "Passed!" );
});

test("Board constructor returns Board object", function() {
  board = new Board();
	ok(board.constructor == Board, "Passed!");
});

test("Box constructor returns Box object", function() {
  box = new Box();
	ok(box.constructor == Box, "Passed!");
});
