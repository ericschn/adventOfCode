import data

# Getting the num list ready
strList = data.numInput.split("\n")
intList = []
for x in strList:
  intList.append(int(x))

# Tests
test1 = [1, -1] # 0
test2 = [3, 3, 4, -2, -4]   # 10
test3 = [-6, 3, 8, 5, -6]   # 5
test4 = [7, 7, -2, -7, -4]  # 14

# intList = test4

# Initializing variables
sums = [0]
intListLen = len(intList)
maxLoops = 200000
i = 0
j = 1

while i < maxLoops:
  sums.append(sums[i] + intList[i % intListLen])
  if sums[i] in sums[0:i]:
    print("found it")
    print(sums[i])
    print("it's above this")
    break
  if not i % intListLen:
    print(j)
    j += 1
  i += 1
