with open('words.txt', 'r') as file:
    lines = file.readlines()

def condition1(str):
    return len(str) == 8 and str[0] == str[1] and str[-1] == str[-2]

def condition2(str):
    return len()
lines = list(map(str.strip,lines))
lines = list(filter(condition1,lines))
print(lines)