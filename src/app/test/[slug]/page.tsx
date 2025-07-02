export default async function TestPage({
	params,
}: Readonly<{
	params: { slug: string };
}>) {
	const { slug } = await params;

	return (
		<div>
			<h1>Test Page</h1>
			<p>Slug: {slug}</p>
		</div>
	);
}
