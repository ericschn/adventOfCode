import data4
from datetime import datetime as DateTime, timedelta as TimeDelta

data = data4.rawArr
dateTimes = []

# list of datetime objects
for item in data:
  itemTime = DateTime.strptime(item[:16], "%Y-%m-%d %H:%M")
  if itemTime.hour > 0:
    itemTime = itemTime.replace(hour=0, minute=0) + TimeDelta(days=1)
  dateTimes.append(itemTime)

for i in range(len(dateTimes)):
  print(dateTimes[i], data[i], "\n")

# loop through datas

# if contains Guard, get number from between '#' and ' '

# set currentGuard to guard#

# after every guard entry, at least 1 set of falls asleep - wakes up follows
# 




# First find guard with most total minutes asleep

# Second find the minute (0-59) guard is asleep the most

# I think I have to build another matrix
