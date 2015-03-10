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
