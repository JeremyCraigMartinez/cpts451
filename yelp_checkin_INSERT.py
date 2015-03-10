def CheckIn_INSERT(obj, cursor):
	c_bid = obj['business_id']
	for key,value in obj['checkin_info'].items():
		cursor.execute((
				"INSERT INTO CheckIn "
				"(day,num_checkins,c_bid) "
				"VALUES ('%s',%s,'%s')"
		) % (
				str(key),
				str(value),
				str(c_bid),
		))
