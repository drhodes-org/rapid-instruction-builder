build:
	tsc --out rib.js main.ts
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
