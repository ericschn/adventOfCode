import string
import input

strArr       = input.strArr
abcArr       = list(string.ascii_lowercase)
twoCount     = 0
threeCount   = 0
twoFound     = False
threeFound   = False

for checksum in strArr:
  twoFound   = False
  threeFound = False

  for letter in abcArr:
    if checksum.count(letter) == 2 and not twoFound:
      twoCount   += 1
      twoFound    = True

    if checksum.count(letter) == 3 and not threeFound:
      threeCount += 1
      threeFound  = True

    if twoFound and threeFound:
      break

print("the answer is: " + str(twoCount * threeCount))