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
	return "Category_INSERT"

def Attributes_INSERT(obj, cursor):
	return "Attributes_INSERT"

def child_attributes_INSERT(obj, cursor):
	return "child_attributes_INSERT"

def Attributes_Int_Value_INSERT(obj, cursor):
	return "Attributes_Int_Value_INSERT"

def Attributes_VarChar_Value_INSERT(obj, cursor):
	return "Attributes_VarChar_Value_INSERT"

def CheckIn_INSERT(obj, cursor):
	c_bid = obj['business_id']
	for key,value in obj.items():
		if key.startswith('checkin_info.'):
			cursor.execute((
					"INSERT INTO CheckIn "
					"(day,num_checkins,c_bid) "
					"VALUES (%s,%s,%s)"
			) % (
					"\'"+str(key.split('.')[1])+"\'",
							 str(value),
					"\'"+str(c_bid)+"\'",
			))

def User_INSERT(obj, cursor):
	return "User_INSERT"

def Elite_INSERT(obj, cursor):
	return "Elite_INSERT"

def Compliment_INSERT(obj, cursor):
	return "Compliment_INSERT"

def Friendship_INSERT(obj, cursor):
	return "Friendship_INSERT"

def Review_INSERT(obj, cursor):
	query = (
		"INSERT INTO Review ("
		"review_id,stars,review_text,"
		"votes_funny,votes_useful,"
		"votes_cool,review_date,r_bid,r_uid) "
		"VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"
		)
	data = (
			str(obj['review_id']),
					obj['stars'], 
			str(obj['review_text']),
					obj['votes_funny'],
					obj['votes_useful'],
					obj['votes_cool'], 
			str(obj['review_date']), 
			str(obj['r_bid']),
			str(obj['r_uid']),
		)
	cursor.execute(query,data)