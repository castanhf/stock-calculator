git:
	git add .
	git commit -m "$t" -m "$b"
	git push -u origin main
# example on how to use makefile in commandline	
# make git t="title" b="long body"

#NOTE: "makefile:2: *** missing separator.  Stop."
#HOW TO FIX: use tab instead of regular spaces

#NOTE2: will not use terminal for git purposes
#	using gitbash to get the job done
#	thinking of using git kraken or fork
#	for branch management and git actions