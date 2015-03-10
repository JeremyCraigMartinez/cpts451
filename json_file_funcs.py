from yelp_review_INSERT import *
from yelp_business_INSERT import *
from yelp_checkin_INSERT import *
from yelp_user_INSERT import *

def yelp_business(obj, cursor):
	#Business_INSERT(obj, cursor)
	#Days_of_Week_INSERT(obj, cursor)
	Category_INSERT(obj, cursor)
	#Attributes_INSERT(obj, cursor)
	#child_attributes_INSERT(obj, cursor)
	#Attributes_Int_Value_INSERT(obj, cursor)
	#Attributes_VarChar_Value_INSERT(obj, cursor)

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
