import pymysql
import simplejson as json
from parse import *
from json_file_funcs import *

if __name__ == '__main__':
	file_contents = open('creds.json').read()
	file_contents = json.loads(file_contents)	

	connection = pymysql.connect(**file_contents)
	cursor = connection.cursor()

	json_file = sys.argv[1]
	filename = json_file.split('/')[len(json_file.split('/'))-1].split('.json')[0]
	csv_file = '{0}.csv'.format(filename)
	cols = col_names(json_file, cursor, globals()[filename])

	connection.commit()
	cursor.close()
	connection.close()