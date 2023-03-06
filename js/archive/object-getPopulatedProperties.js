function getPopulatedProperties(object) {
    let properties = []
    for (property in object) {
        if (object[property])
            properties.push(
                property
            )
    } return properties
}