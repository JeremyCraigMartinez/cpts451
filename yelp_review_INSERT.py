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