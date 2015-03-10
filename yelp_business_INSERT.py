def Business_INSERT(obj, cursor):
	query = (
		"INSERT INTO Business ("
		"business_id,review_count,name,"
		"state,full_address,longitude,"
		"latitude,city,open,type ) "
		"VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
		)
	data = (
			str(obj['business_id']),
					obj['review_count'],
			str(obj['name']),
			str(obj['state']),
			str(obj['full_address']),
					obj['longitude'],
					obj['latitude'],
			str(obj['city']),
		 (		obj['open'] if 'open' in obj else None),
			str(obj['type']),
		)
	cursor.execute(query,data)

def Days_of_Week_INSERT(obj, cursor):
	h_bid = obj['business_id']

	def gen(tmp_obj):
		skip_day = ''
		row = {'open':None,'close':None,'day':None,'h_bid':str(h_bid)}
		for key,value in sorted(obj.items()):
			if key.startswith('hours.'):
				args = key.split('.')
				if skip_day == str(args[1]) or skip_day == '':
					row[str(args[2])] = str(value)
					skip_day = str(args[1])
				else:
					row['day'] = str(args[1])
					yield row
					skip_day = args[1]
					row = {'open':None,'close':None,'day':None,'h_bid':str(h_bid)}
					row[str(args[2])] = str(value)

	for row in gen(obj):
		cursor.execute((
					"INSERT INTO Days_of_Week "
					"(day,open,close,h_bid) "
					"VALUES ('%s','%s','%s','%s')"
			) % (
					row['day'],
					row['open'],
					row['close'],
					row['h_bid'],
			))

def Category_INSERT(obj, cursor):
	c_bid = obj['business_id']
	for each_cat in obj['categories']:
		cursor.execute((
				"INSERT INTO Category "
				"(name,c_bid) "
				"VALUES (%s,%s)"
		) % (
				"\'"+str(each_cat.replace("'", r"\'"))+"\'",
				"\'"+str(c_bid)+"\'",
		))

def Attributes_INSERT(obj, cursor):
	return "Attributes_INSERT"

def child_attributes_INSERT(obj, cursor):
	return "child_attributes_INSERT"

def Attributes_Int_Value_INSERT(obj, cursor):
	return "Attributes_Int_Value_INSERT"

def Attributes_VarChar_Value_INSERT(obj, cursor):
	return "Attributes_VarChar_Value_INSERT"
