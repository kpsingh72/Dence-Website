show dbs 
use kpsinghkart
show collections

///Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
//deleteOne will delete the matching entry and will delete the firs entry case of multi document match
