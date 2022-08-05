with open('./src/test.txt', "r", encoding='utf-8') as f:
    lines = f.readlines()
    for l in lines:
        print('"{a}"'.strip().format(a = l.strip()), end=", ")