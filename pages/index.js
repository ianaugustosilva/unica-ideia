import Link from "next/link";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Link href='/sobre'>Acessar página sobre</Link>
			<h1>BOM DIA</h1>
		</div>
	);
}
export default Home;
