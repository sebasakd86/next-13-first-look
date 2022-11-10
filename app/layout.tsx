import "../styles/globals.css";
import Header from "./header";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<html>
			<head></head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
