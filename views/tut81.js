//Inserting data in mongo db
use kpsinghkart
db.items.insertOne({name:"sumsung 30s" ,price: 2200, rating: 4.5, qty: 233, sold: 98 })
db.items.insertmany([{name:"Realme 30s" ,price: 22200, rating: 5.5, qty: 333, sold: 38,},{name:"Realme narzo 3s" ,price: 30200, rating: 2.5, qty: 433, sold: 200, }])