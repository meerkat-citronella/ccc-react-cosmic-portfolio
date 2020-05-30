export const getNestedObject = (object, pathArr) => {
	return pathArr.reduce(
		(obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
		object,
	)
}

export const mapData = (data) => (...keyNames) => {
	return data.map((item) => {
		return getNestedObject(item, keyNames)
	})
}
