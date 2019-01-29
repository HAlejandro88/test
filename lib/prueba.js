function tatetiRow(row, board) {

	return board[row][0] != null

			&& (board[row][0] == board[row][1] && board[row][1] == board[row][2]);

}
exports.tatetiRow = tatetiRow;