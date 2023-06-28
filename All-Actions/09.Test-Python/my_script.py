def write_data():
    with open('test.txt','w') as file:
        file.write("This is the write command\n")
        file.write("It allows us to write in a particular file\n")
if __name__=='__main__':
    write_data()