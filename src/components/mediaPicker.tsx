import React, { useState, useRef, JSX } from "react";
import { X, Upload, Image, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ImageFile {
	id: string;
	file: File;
	url: string;
	name: string;
	size: string;
}

export default function MediaPicker(): JSX.Element {
	const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);
	const [dragActive, setDragActive] = useState<boolean>(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileSelect = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const files = event.target.files ? Array.from(event.target.files) : [];
		processFiles(files);
		if (event.target) {
			event.target.value = "";
		}
	};

	const processFiles = (files: File[]): void => {
		const imagePromises = files.map((file) => {
			return new Promise<ImageFile | null>((resolve) => {
				if (file && file.type.startsWith("image/")) {
					const reader = new FileReader();
					reader.onloadend = () => {
						resolve({
							id: `${Date.now()}-${Math.random()}`,
							file: file,
							url: reader.result as string,
							name: file.name,
							size: (file.size / 1024).toFixed(2) + " KB",
						});
					};
					reader.onerror = () => {
						console.error("Error reading file:", file.name);
						resolve(null);
					};
					reader.readAsDataURL(file);
				} else {
					resolve(null);
				}
			});
		});

		Promise.all(imagePromises).then((images) => {
			const validImages = images.filter(
				(img): img is ImageFile => img !== null
			);
			setSelectedImages((prev) => [...prev, ...validImages]);
		});
	};

	const handleDrag = (e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			const files = Array.from(e.dataTransfer.files);
			processFiles(files);
		}
	};

	const removeImage = (id: string): void => {
		setSelectedImages((prev) => prev.filter((img) => img.id !== id));
	};

	const clearAll = (): void => {
		setSelectedImages([]);
	};

	const handleUploadClick = (): void => {
		fileInputRef.current?.click();
	};

	return (
		<div className="max-w-7xl mx-auto">
			{/* Upload Area */}
			<div className="mb-8">
				<input
					ref={fileInputRef}
					type="file"
					multiple
					accept="image/*"
					onChange={handleFileSelect}
					className="hidden"
				/>
				<div
					onClick={handleUploadClick}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
					className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
						dragActive
							? "border-blue-500 bg-blue-50 scale-[1.02]"
							: "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
					}`}>
					<div className="flex flex-col items-center">
						<div
							className={`rounded-full p-4 mb-4 transition-colors ${
								dragActive ? "bg-blue-100" : "bg-slate-100"
							}`}>
							<Upload
								className={`h-10 w-10 transition-colors ${
									dragActive ? "text-blue-500" : "text-slate-400"
								}`}
							/>
						</div>
						<p className="text-slate-700 font-semibold text-lg mb-2">
							{dragActive
								? "Drop your images here"
								: "Click to upload or drag and drop"}
						</p>
						<p className="text-slate-500 text-sm mb-3">
							Select one or multiple images at once
						</p>
						<div className="flex gap-2 flex-wrap justify-center">
							<Badge variant="outline" className="text-xs">
								PNG
							</Badge>
							<Badge variant="outline" className="text-xs">
								JPG
							</Badge>
							<Badge variant="outline" className="text-xs">
								GIF
							</Badge>
							<Badge variant="outline" className="text-xs">
								WebP
							</Badge>
						</div>
					</div>
				</div>
			</div>

			{/* Selected Images Grid */}
			{selectedImages.length > 0 ? (
				<div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-4">
						<div className="flex items-center gap-2">
							<FileImage className="h-5 w-5 text-slate-600" />
							<h3 className="text-xl font-semibold text-slate-800">
								Your Images
							</h3>
						</div>
						<div className="flex gap-2 items-center">
							<Badge variant="secondary" className="text-sm px-3 py-1">
								{selectedImages.length}{" "}
								{selectedImages.length === 1 ? "image" : "images"}
							</Badge>
							<Button
								onClick={clearAll}
								variant="outline"
								size="sm"
								className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
								<X className="h-4 w-4 mr-1" />
								Clear All
							</Button>
						</div>
					</div>

					<ScrollArea className="w-full">
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
							{selectedImages.map((image) => (
								<Card
									key={image.id}
									className="relative group overflow-hidden border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
									<div className="aspect-square bg-slate-100">
										<img
											src={image.url}
											alt={image.name}
											className="w-full h-full object-cover"
											onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
												console.error("Image load error:", image.name);
											}}
										/>
									</div>

									{/* Overlay on hover */}
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-200">
										<Button
											onClick={() => removeImage(image.id)}
											size="icon"
											variant="destructive"
											className="absolute top-2 right-2 h-8 w-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all transform md:scale-90 md:group-hover:scale-100 shadow-lg">
											<X className="h-4 w-4" />
										</Button>
									</div>

									{/* Image info */}
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
										<p className="text-white text-xs font-medium truncate mb-1">
											{image.name}
										</p>
										<Badge variant="secondary" className="text-xs h-5">
											{image.size}
										</Badge>
									</div>
								</Card>
							))}
						</div>
					</ScrollArea>
				</div>
			) : (
				<Card className="bg-slate-50 border-slate-200">
					<CardContent className="text-center py-16">
						<div className="flex flex-col items-center">
							<div className="rounded-full bg-slate-100 p-6 mb-4">
								<Image className="h-12 w-12 text-slate-300" />
							</div>
							<p className="text-slate-600 font-semibold text-lg mb-1">
								No images selected yet
							</p>
							<p className="text-slate-400 text-sm">
								Upload your first image to get started
							</p>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
