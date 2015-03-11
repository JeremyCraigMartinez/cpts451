def User_INSERT(obj, cursor):
	query = (
		"INSERT INTO User ("
		"user_id,name,fans,"
		"average_stars,yelping_since,"
		"votes_funny,votes_useful,votes_cool) "
		"VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
		)
	data = (
		str(obj['user_id']),
		str(obj['name']),
			 (obj['fans'] if 'fans' in obj else None),
			 (obj['average_stars'] if 'average_stars' in obj else None),
		str(obj['yelping_since']),
				obj['votes']['funny'],
				obj['votes']['useful'],
				obj['votes']['cool'],
		)
	cursor.execute(query,data)

def Elite_INSERT(obj, cursor):
	e_uid = obj['user_id']
	for each in obj['elite']:
		cursor.execute((
				"INSERT INTO Elite "
				"(year,e_uid) "
				"VALUES (%s,'%s')"
		) % (
				str(each),
				str(e_uid),
		))

def Compliment_INSERT(obj, cursor):
	c_uid = obj['user_id']
	for key,val in obj['compliments'].items():
		cursor.execute((
				"INSERT INTO Compliment "
				"(tag,c_uid,numTagged) "
				"VALUES ('%s','%s',%s)"
		) % (
				str(key),
				str(c_uid),
				str(val),
		))

def Friendship_INSERT(obj, cursor):
	friend1 = obj['user_id']
	for each_friend in obj['friends']:
		cursor.execute((
				"INSERT INTO Friendship "
				"(friend1,friend2) "
				"VALUES ('%s','%s')"
		) % (
				str(friend1),
				str(each_friend),
		))
