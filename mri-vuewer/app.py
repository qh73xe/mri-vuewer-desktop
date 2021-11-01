import eel


@eel.expose
def app_info():
    return {
        "name": "MRI-VUEWER-DESKTOP",
        "version": 0.1,
    }


def onClose(page, sockets):
    import sys
    print(page + 'が閉じられました。プログラムを終了します。')
    sys.exit()


if __name__ == "__main__":
    eel.init('ui')
    eel.start('index.html', mode="chrome", close_callback=onClose)
