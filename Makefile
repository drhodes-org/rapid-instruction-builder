build: FORCE
	tsc --out ./build/rib.js ./src/main.ts

test:
	echo ok

clean:
	@echo "!!! DELETING FILES PAY ATTENTION !!!"
	@-sh clean.sh

add: clean
	git add -A :/
	git status

genesis: clean
	echo "need to write genesis here."

commit:
	git commit -a

work:
	emacs -nw $(shell find | grep \\.ts$) Makefile DESIGN.org

push: FORCE
	sh push.sh

FORCE:
