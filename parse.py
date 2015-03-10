import simplejson as json
import sys

def col_names(json_file, cursor, func):
	cols = set()
	i=1
	percent = 5
	line_nums = sum(1 for line in open(json_file))
	with open(json_file) as jf:
		for each in jf:
			contents = json.loads(each)
			func(contents, cursor)
			if i/line_nums > 0.05:
				print("%s%% done" % str(percent))
				i=0
				percent = percent + 5
			i=i+1
	print("%s%% done" % str(percent))
	return cols

if __name__ == '__main__':
	json_file = sys.argv[1]
	csv_file = '{0}.csv'.format(json_file.split('.json')[0])
	cols = col_names(json_file)