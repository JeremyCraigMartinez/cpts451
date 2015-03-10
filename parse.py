import simplejson as json
import sys

def col_names(json_file, cursor, func):
	cols = set()
	with open(json_file) as jf:
		for each in jf:
			contents = json.loads(each)
			func(get_cols(contents), cursor)
	return cols

def get_cols(contents, parent=''):
	names = []
	for k,v in contents.items():
		col_name = '{0}.{1}'.format(parent,k) if parent else k
		if isinstance(v,dict):
			names.extend(get_cols(v,col_name).items())
		else:
			names = names + [(col_name,v)]
	return dict(names)

if __name__ == '__main__':
	json_file = sys.argv[1]
	csv_file = '{0}.csv'.format(json_file.split('.json')[0])
	cols = col_names(json_file)