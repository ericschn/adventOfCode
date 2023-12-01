import data

dataList = data.result

resultCount = 0

w, h = 1008, 1008
matrix = [[0 for x in range(w)] for y in range(h)]

# iterate over dataList [#][x, y][w, h]
for dataArr in dataList:
  x = dataArr[0][0]
  y = dataArr[0][1]
  w = dataArr[1][0]
  h = dataArr[1][1]

  # iterating over how many rows
  for rows in range(h):
    # iterating over width
    for cols in range(w):
      matrix[y + rows][x + cols] += 1

for row in matrix:
  for item in row:
    if item > 1:
      resultCount += 1

print(resultCount)
