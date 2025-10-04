import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const InputWithLabel = ({
	className,
	label,
	inputType,
	name,
	placeholder,
	defaultValue,
	minValue,
	maxValue,
	required,
	...props
}: React.ComponentProps<"div"> & {
	label: string;
	inputType: string;
	name: string;
	placeholder?: string;
	defaultValue?: string;
	minValue?: number;
	maxValue?: number;
	required?: boolean;
}) => {
	return (
		<div className={cn("grid w-full gap-2", className)} {...props}>
			<Label htmlFor={name}>
				{label} {required && <span className="text-red-500 ">*</span>}
			</Label>
			<Input
				type={inputType}
				id={name}
				name={name}
				placeholder={placeholder}
				defaultValue={defaultValue}
				min={minValue}
				max={maxValue}
				required={required}
			/>
		</div>
	);
};

export default InputWithLabel;
