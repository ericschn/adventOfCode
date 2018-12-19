import string
import input

strArr = input.strArr
wrongFound = False
wrongCounter = 0
result = -1

for i in range(len(strArr)-1):
  for j in range(i, len(strArr)):
    wrongFound = False
    wrongCounter = 0

    for k in range(len(strArr[i])):
      if wrongCounter < 2:
        if list(strArr[i])[k] != list(strArr[j])[k]:
          wrongCounter += 1
          
      if wrongCounter == 1 and k == len(strArr[i]) - 1:
        result = strArr[i] + " : " + strArr[j]

print(result)

