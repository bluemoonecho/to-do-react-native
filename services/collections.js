export const onSnapshot = (ref, callback, options)=>{
    //ref = referance to the location of item in database
    //re.firestore.collection.users
    //onSnapshot creates a listener for updates// everytime it updates, 
    //you get a new snapshot of the document it updates
    ref.onSnapshot((snapshot)=>{
        let items = snapshot.docs.map((doc)=>{
            const data = doc.data();
            data.id = doc.id;
            return data;
        })
        items = options && options.sort ? items.sort(options.sort) : items;
        callback(items);
    })
}

export const addDoc = (ref, {id, ...data}) => {
    const doc = id ? ref.doc(id) : ref.doc();
    doc.set(data).then(()=>{
        console.log('Add new item')
    })
}

export const removeDoc = (ref, id) => {
    ref.doc(id)
    .delete()
    .then(()=>{
        console.log(`Removed item ${id}`)
    })
}

export const updateDoc = (ref, id, data) => {
    ref.doc(id)
    .set(data)
    .then(()=>{
        console.log(`Updated item ${id}`)
    })
}