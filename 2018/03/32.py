import data
from PIL import Image

dataList = data.result

ids = [i+1 for i, datas in enumerate(dataList)]
overlapping = {key: False for key in ids}

resultCount = 0
# matrix width, matrix height
mw, mh = 1008, 1008

# mw, mh = 8, 8 # TEST

matrix = [[0 for x in range(mw)] for y in range(mh)]

for i, dataArr in enumerate(dataList):
  x = dataArr[0][0]
  y = dataArr[0][1]
  w = dataArr[1][0]
  h = dataArr[1][1]

  for rows in range(h):
    for cols in range(w):
      matrixValue = matrix[y + rows][x + cols]
      if matrixValue != 0:
        overlapping[matrixValue] = True
        overlapping[i+1] = True
        #print(overlapping[i+1])
      elif matrixValue == 0:
        matrix[y + rows][x + cols] += i+1



# # DEBUG print matrix readable
# for i in range(mh):
#   print(matrix[i])

values = overlapping.values()

print(values)

# # count all overlapping
# for row in matrix:
#   for item in row:
#     if item > 1:
#       resultCount += 1

# print(matrix)

# assign index+1 to each matrix slot.
# if not 0, then change flag for index/id on both 
# current id and id that's in the matrix to false
