ROOT := $(shell git rev-parse --show-toplevel)
UI := $(ROOT)/ui
APP := $(ROOT)/mri-vuewer
start:
	cd $(UI) && yarn build
	cd $(APP) && python app.py
app:
	cd $(UI) && yarn build
	python -m eel ${APP}/app.py ui
