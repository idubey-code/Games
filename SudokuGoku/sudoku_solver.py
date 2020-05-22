# Steps to be performed
# 1. Pick an empty slot
# 2. Try all numbers in it.
# 3. Find one that works.
# 4. Repeat
# 5. Backtrack (If no solution then erasing the recent change, going back one step and trying different number)

board = [[7, 8, 0, 4, 0, 0, 1, 2, 0],
         [6, 0, 0, 0, 7, 5, 0, 0, 9],
         [0, 0, 0, 6, 0, 1, 0, 7, 8],
         [0, 0, 7, 0, 4, 0, 2, 6, 0],
         [0, 0, 1, 0, 5, 0, 9, 3, 0],
         [9, 0, 4, 0, 6, 0, 0, 0, 5],
         [0, 7, 0, 3, 0, 0, 0, 1, 2],
         [1, 2, 0, 0, 0, 7, 4, 0, 0],
         [0, 4, 9, 2, 0, 6, 0, 0, 7]]


def display(in_board):
    for i in range(len(in_board)):
        if i % 3 == 0 and i != 0:
            print('---------------------')

        for j in range(len(in_board[0])):
            if j % 3 == 0 and j != 0:
                print("| ", end='')
            if j == 8:
                print(str(in_board[i][j]))
            else:
                print(str(in_board[i][j]) + ' ', end='')


def is_empty(in_board):
    for i in range(len(in_board)):
        for j in range(len(in_board[0])):
            if in_board[i][j] == 0:
                # return tuple(row, column) where space is empty
                return i, j
    return False


def is_valid(in_board, num, pos):
    # Checking rows
    for i in range(len(in_board[0])):
        if in_board[pos[0]][i] == num and pos[1] != i:
            return False

    # Checking columns
    for j in range(len(in_board)):
        if in_board[j][pos[1]] == num and pos[0] != j:
            return False

    # Checking square
    x = pos[1] // 3  # Getting x coordinate of square
    y = pos[0] // 3  # Getting y coordinate of square

    for i in range(y * 3, y * 3 + 3):
        for j in range(x * 3, x * 3 + 3):
            if in_board[i][j] == num and (i, j) != pos:
                return False

    return True


def solve(in_board):
    find = is_empty(in_board)
    if not find:
        return True
    else:
        row, column = find

    for num in range(1, 10):
        if is_valid(in_board, num, (row, column)):
            in_board[row][column] = num

            if solve(in_board):
                return True

            in_board[row][column] = 0

    return False


display(board)
print(' ')
solve(board)
display(board)
