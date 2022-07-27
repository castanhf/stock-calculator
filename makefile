git:
	git add .
	git commit -m "$t" -m "$b"
	git push -u origin main
# example on how to use makefile in commandline	
# make git t="title" b="long body"

#NOTE: "makefile:2: *** missing separator.  Stop."
#HOW TO FIX: use tab instead of regular spaces

#vsc attempt