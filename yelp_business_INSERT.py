def Business_INSERT(obj, cursor):
	query = (
		"INSERT INTO Business ("
		"business_id,review_count,name,"
		"state,full_address,longitude,"
		"latitude,city,open,stars,type ) "
		"VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
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
					obj['stars'],
			str(obj['type']),
		)
	cursor.execute(query,data)

def Days_of_Week_INSERT(obj, cursor):
	h_bid = obj['business_id']
	for day in obj['hours']:
		open_time = None if 'open' not in obj['hours'][day] else obj['hours'][day]['open']
		close_time = None if 'close' not in obj['hours'][day] else obj['hours'][day]['close']
		cursor.execute((
					"INSERT INTO Days_of_Week "
					"(day,open,close,h_bid) "
					"VALUES ('%s','%s','%s','%s')"
			) % (
					str(day),
					str(open_time),
					str(close_time),
					str(h_bid),
			))

def Category_INSERT(obj, cursor):
	c_bid = obj['business_id']
	for each_cat in obj['categories']:
		cursor.execute((
				"INSERT INTO Category "
				"(name,c_bid) "
				"VALUES ('%s','%s')"
		) % (
				str(each_cat.replace("'", r"\'")),
				str(c_bid),
		))

cursor = None
def pre_Attributes_INSERT(obj, cursor):
	try:
		obj['attributes']
		globals()['cursor'] = cursor
		for each in attr_iter(obj['business_id'], obj['attributes']):
			pass
	except:
		pass
	return

def attr_iter(a_bid, attrs, embedded=False):
	for key,val in attrs.items():
		if isinstance(val,dict):
			Attributes_INSERT(a_bid, key, True, None)
			sec_2_last = cursor.lastrowid
			for each_child in attr_iter(a_bid, val, embedded=True):
				child_attributes_INSERT(sec_2_last,each_child)
		else:
			yield Attributes_INSERT(a_bid, key, False, val, True)

def Attributes_INSERT(a_bid, attr_key, is_parent, val, embedded=False):
	cursor.execute((
				"INSERT INTO Attributes "
				"(a_bid,attr_key,is_parent) "
				"VALUES ('%s','%s',%s)"
		) % (
				str(a_bid),
				str(attr_key),
						is_parent,
		))
	last = cursor.lastrowid
	if val == None:
		return
	try: 
		int(str(val))
		Attributes_Int_Value_INSERT(cursor.lastrowid,val)
	except:
		Attributes_VarChar_Value_INSERT(cursor.lastrowid,val)
	return last

def child_attributes_INSERT(parent, child):
	cursor.execute((
				"INSERT INTO child_attributes "
				"(parent,child) "
				"VALUES ('%s','%s')"
		) % (
				str(parent),
				str(child),
		))

def Attributes_Int_Value_INSERT(autoid, val):
	cursor.execute((
				"INSERT INTO Attributes_Int_Value "
				"(attr_id,value) "
				"VALUES ('%s','%s')"
		) % (
				str(autoid),
				str(val),
		))

def Attributes_VarChar_Value_INSERT(autoid, val):
	cursor.execute((
				"INSERT INTO Attributes_VarChar_Value "
				"(attr_id,value) "
				"VALUES ('%s','%s')"
		) % (
				str(autoid),
				str(val),
		))
