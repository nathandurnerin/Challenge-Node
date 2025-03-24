import dotenv from "dotenv";
import cowsay from "cowsay";

dotenv.config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

const message = `Hello I'm ${name} from ${campus}`;
console.log(
	cowsay.say({
		text: message,
		e: "oO",
		T: "U ",
	}),
);
