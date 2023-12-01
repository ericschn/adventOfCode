import itertools
import data
import time

startTime = time.time()

strList = data.numInput.split("\n")
intList = []
for x in strList:
  intList.append(int(x))

# test
intList = [400, -398, 4, -2]

freq = 0
seen = {0}
print(type(seen))
for num in itertools.cycle(intList):
    freq += num
    if freq in seen:
        print(freq); break
    seen.add(freq)

print("Length is: " + str(len(seen)))

endTime = time.time()

#print(seen)

print(endTime - startTime)