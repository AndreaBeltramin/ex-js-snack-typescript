let dato: unknown = 2;

if (typeof dato === "string") {
	console.log(dato.toUpperCase());
} else if (typeof dato === "number") {
	console.log(dato * 2);
} else if (typeof dato === "boolean") {
	console.log(dato ? "Sì" : "No");
} else if (dato === null) {
	console.log("Il dato è vuoto");
} else if (Array.isArray(dato)) {
	console.log(dato.length);
} else if (dato instanceof Promise) {
	dato.then((msg) => console.log(msg));
} else {
	console.log("Tipo non supportato");
}
