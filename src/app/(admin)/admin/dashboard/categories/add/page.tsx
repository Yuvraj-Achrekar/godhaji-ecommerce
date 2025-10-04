import InputWithLabel from "@/components/inputWithLabel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const AddCategory = () => {
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardTitle className="text-lg">Add Category</CardTitle>
			</CardHeader>
			<Separator />
			<CardContent>
				<form action="">
					<div className="grid w-full items-center gap-4">
						<InputWithLabel
							label="Name"
							inputType="text"
							placeholder="Enter the name of the category"
							name="name"
							required={true}
						/>
						<InputWithLabel
							label="Description"
							inputType="text"
							placeholder="Enter a description for the category"
							name="sescription"
							required={true}
						/>
						<Button>Add Category</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default AddCategory;
