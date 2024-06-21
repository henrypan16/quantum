export const TransferInfo = ({
	label,
	value,
}: {
	label: string;
	value: string | number | null | undefined;
}) => {
	return (
		<>
			<p className="col-span-6 place-self-end mr-1">{label}</p>
			<p className="place-self-start">:</p>
			<p className="col-span-5 place-self-start">{value}</p>
		</>
	);
};
