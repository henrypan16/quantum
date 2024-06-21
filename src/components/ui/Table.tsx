import {ReactElement} from "react";

const Row = ({ children }: { children: ReactElement }) => <tr>{children}</tr>;

const Cell = ({ children }: { children: ReactElement }) => (
	<td className="px-6 py-4 whitespace-nowrap dark:text-white">{children}</td>
);

const Body = ({ children }: { children: ReactElement }) => (
	<tbody>{children}</tbody>
);

const Header = ({ children }: { children: ReactElement }) => (
	<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		{children}
	</thead>
);

export const Table = ({ children }: { children: ReactElement }) => {
	return (
		<table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
			{children}
		</table>
	);
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
