import eel


@eel.expose
def hello_world():
    return "Hello!!"


def onClose(page, sockets):
    import sys
    print(page + 'が閉じられました。プログラムを終了します。')
    sys.exit()


if __name__ == "__main__":
    eel.init('ui')
    eel.start('index.html', close_callback=onClose)
