import { FormEvent, ReactElement, RefObject } from "react";

type FormProps = {
	children: ReactElement | ReactElement[];
	submit: (e: FormEvent) => void;
	submitRef?: RefObject<HTMLButtonElement>;
	id: string;
};

const TextBox = () => (
	<div className="flex items-center ml-6 gap-3 w-full">
		<label
			htmlFor="name"
			className="block text-sm font-medium text-gray-900 dark:text-white">
			Path
		</label>
		<input
			type="text"
			name="name"
			id="name"
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
			placeholder="Enter download path"
		/>
	</div>
);

const Select = () => (
	<div>
		<label
			className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			htmlFor="">
			Category
		</label>
		<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option>test</option>
		</select>
	</div>
);

const Checkbox = ({ label }: { label: string }) => (
	<div className="flex items-center h-5">
		<input
			id="remember"
			type="checkbox"
			value=""
			className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
		/>
		<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
			{label}
		</label>
	</div>
);

const Toggle = () => (
	<label className="inline-flex items-center cursor-pointer">
		<span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
			Manual
		</span>
		<input type="checkbox" value="" className="sr-only peer" />
		<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
		<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
			Automatic
		</span>
	</label>
);

export const Form = ({ children, submit, submitRef, id }: FormProps) => {
	return (
		<form
			id={id}
			className="p-4 md:p-5 w-full"
			onSubmit={submit}
			method="post">
			<div className="flex flex-col gap-4 w-full">{children}</div>
			<button type="submit" className="hidden" ref={submitRef} />
		</form>
	);
};

Form.TextBox = TextBox;
Form.Select = Select;
Form.Checkbox = Checkbox;
Form.Toggle = Toggle;
