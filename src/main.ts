// let valore: unknown = {};

// if (typeof valore === "string") {
// 	console.log(valore.toUpperCase());
// } else if (typeof valore === "number") {
// 	valore = valore * 2;
// 	console.log(valore);
// } else if (typeof valore === "boolean") {
// 	valore === true ? console.log("Sì") : console.log("No");
// } else if (valore === null) {
// 	console.log("Il dato è vuoto");
// } else if (Array.isArray(valore)) {
// 	console.log(valore.length);
// } else if (valore === Promise) {
// 	const result = await valore;
// 	console.log(result);
// } else {
// 	console.log("Tipo non supportato");
// }

type Dipendente = {
	nome: string;
	cognome: string;
	annoNascita: number;
	sesso: "m" | "f";
	anniDiServizio: number[];
	readonly emailAziendale: string;
	contratto: "indeterminato" | "determinato" | "freelance";
};

type Developer = Dipendente & {
	livelloEsperienza: "Junior" | "Mid" | "Senior";
	linguaggi?: string[] | [];
	certificazioni: string[];
};

type ProjectManager = Dipendente & {
	teamSize: number | null;
	budgetGestito?: number;
	stakeholderPrincipali: string[] | [];
};

type Team = {
	nome: string;
	progettoAttuale: string | null;
	budget: number;
	membri: [ProjectManager, Developer, ...Developer[]];
};
