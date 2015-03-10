from table_funcs import *

def yelp_business(obj, cursor):
	#Business_INSERT(obj, cursor)
	Days_of_Week_INSERT(obj, cursor)
	#cursor.execute(*Category_INSERT(obj, cursor))
	#cursor.execute(*Attributes_INSERT(obj, cursor))
	#cursor.execute(*child_attributes_INSERT(obj, cursor))
	#cursor.execute(*Attributes_Int_Value_INSERT(obj, cursor))
	#cursor.execute(*Attributes_VarChar_Value_INSERT(obj, cursor))

def yelp_checkin(obj, cursor):
	CheckIn_INSERT(obj,cursor)

def yelp_user(obj, cursor):
	pass
	#User_INSERT(obj, cursor)
	#Elite_INSERT(obj, cursor)
	#Compliment_INSERT(obj, cursor)
	#Friendship_INSERT(obj, cursor)
	#Review_INSERT(obj, cursor)

def yelp_review(obj, cursor):
	Review_INSERT(obj, cursor)
