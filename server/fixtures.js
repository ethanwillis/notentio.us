//if (a_collection.find().count() === 0) {
    //
//}

if (notes.find().count() === 0) {
    for (var i=0; i < 5; i++) {
        notes.insert({
            notes: 'notes ' + i
        });
    }
}

if (notebooks.find().count() === 0) {
    for (var i=0; i < 5; i++) {
        notebooks.insert({
            notebooks: 'notebooks ' + i
        });
    }
}
