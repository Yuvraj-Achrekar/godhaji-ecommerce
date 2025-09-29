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
						<Label htmlFor="email">Name</Label>
						<Input
							type="email"
							id="email"
							placeholder="Enter the name of the category"
						/>
						<Label htmlFor="description">Description</Label>
						<Input
							type="text"
							id="description"
							placeholder="Enter a description for the category"
						/>
						<Label htmlFor="email">Email</Label>
						<Input type="email" id="email" placeholder="Email" />
						<Button>Add Category</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default AddCategory;
