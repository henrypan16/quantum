interface SelectProps {
	items: string[] | undefined;
	title: string;
	selected: string;
	setSelected: (obj: string) => void;
}

export const Select = ({
	items,
	title,
	selected,
	setSelected,
}: SelectProps) => {
	return (
		<select
			defaultValue={title}
			value={selected}
			onChange={(e) => setSelected(e.target.value)}
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 scrollbar">
			<option>{title}</option>
			{items &&
				items?.map((item, i) => (
					<option key={i} value={item}>
						{item}
					</option>
				))}
		</select>
	);
};
