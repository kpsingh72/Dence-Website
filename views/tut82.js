//sherching data in mongo db
use kpsinghkart

//This query will ruten all the objects with rating equal to 2.5 
db.items.find({rating: 2.5})
db.items.find({rating: {$gte:5.0}})//use for under 5.0 rating scrch items
db.items.find({rating: {$gt: 3.5}})
/// And operator
db.items.find({rating: {$gt: 3.5},price:{$gt: 4000}})
db.items.find({
    $or: [{rating: {$lt: 3.5}},{price:{$gt: 114000}}]})
    //use for only rating 
    db.item.find({rating: {$gt: 3.5}}, {rating: 1})