export const TransferInfo = ({
	label,
	value,
}: {
	label: string;
	value: string | number | null | undefined;
}) => {
	return (
		<div className="flex flex-row gap-1">
			<p className="font-semibold">{label}</p>
			<p>:</p>
			<p className="">{value}</p>
		</div>
	);
};
