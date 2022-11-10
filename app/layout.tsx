import "../styles/globals.css";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<html>
			<head></head>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
