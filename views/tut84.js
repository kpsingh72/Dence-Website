//How to update data in mongodb
debugger.items.pdateOne({bane:"moto"},{$set:{price:2}})
debugger.items.pdateMany({bane:"moto"},{$set:{price:2,rating:1}})