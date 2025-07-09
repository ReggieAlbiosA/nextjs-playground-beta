"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"; // Assuming you have a Slider component
import { UploadCloud, X, RotateCcw, Palette } from "lucide-react";

type Filter = {
  name: string;
  property: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

const FILTERS: Filter[] = [
  { name: "Brightness", property: "brightness", unit: "%", min: 0, max: 200, step: 1, defaultValue: 100 },
  { name: "Contrast", property: "contrast", unit: "%", min: 0, max: 200, step: 1, defaultValue: 100 },
  { name: "Saturation", property: "saturate", unit: "%", min: 0, max: 200, step: 1, defaultValue: 100 },
  { name: "Grayscale", property: "grayscale", unit: "%", min: 0, max: 100, step: 1, defaultValue: 0 },
  { name: "Sepia", property: "sepia", unit: "%", min: 0, max: 100, step: 1, defaultValue: 0 },
  { name: "Blur", property: "blur", unit: "px", min: 0, max: 10, step: 0.1, defaultValue: 0 },
  { name: "Hue Rotate", property: "hue-rotate", unit: "deg", min: 0, max: 360, step: 1, defaultValue: 0 },
];

export default function PhotoEditor() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, number>>(() =>
    FILTERS.reduce((acc, filter) => ({ ...acc, [filter.property]: filter.defaultValue }), {} as Record<string, number>)
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        setFileName(file.name);
        resetFilters();
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
      setFileName(null);
    }
  };

  const handleFilterChange = (property: string, value: number[]) => {
    setFilters((prev) => ({ ...prev, [property]: value[0] }));
  };

  const resetFilters = () => {
    setFilters(FILTERS.reduce((acc, filter) => ({ ...acc, [filter.property]: filter.defaultValue }), {}));
  };

  const getFilterStyle = () => {
    return Object.entries(filters)
      .map(([property, value]) => {
        const filterDef = FILTERS.find((f) => f.property === property);
        return filterDef ? `${property}(${value}${filterDef.unit})` : "";
      })
      .join(" ");
  };

  const handleRemoveImage = () => {
    setImageSrc(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    resetFilters(); 
  };

  return (
    <Card className="bg-background/50  flex flex-col">
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-2">
           Without MDX - page.tsx
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          This interactive photo editing tool is built using standard JSX/TSX syntax in Next.js, offering full flexibility, rich TypeScript support, and advanced UI logic capabilities. Unlike MDX, which is primarily content-focused, JSX/TSX enables you to harness the full power of React — including dynamic rendering, complex conditional logic, state management, and robust developer tooling like type inference, autocompletion, and linting.

          <br /><br />

          While MDX does allow you to embed components within Markdown, it comes with notable limitations:
          it lacks built-in type checking, has weaker IDE support, produces less informative error messages, and is more prone to rendering issues when integrating dynamic logic. Additionally, syntax highlighting for code blocks in MDX requires extra plugins and configuration, whereas JSX/TSX handles it directly within components using standardized approaches.

          <br /><br />

          For highly interactive or logic-heavy interfaces, JSX/TSX is the preferred foundation — offering greater scalability, maintainability, and a better developer experience overall.
        </CardDescription>

      </CardHeader>

      <div>
        <h3></h3>
      </div>

      <CardContent className="space-y-6 flex-1 over low-y-auto">
        {!imageSrc ? (
          <div
            className="flex flex-col items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px] p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors hover:border-primary hover:bg-primary/5"
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="mb-2 text-sm font-semibold">Drag & drop an image here</p>
            <p className="mb-4 text-xs text-muted-foreground">or</p>
            <Button type="button" variant="outline">
              Browse Files  
            </Button>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative border rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt="Uploaded"
                width={500} // You might want to adjust these based on your design
                height={300} // You might want to adjust these based on your design
                className="max-w-full h-auto mx-auto block"
                style={{ filter: getFilterStyle() }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/70 hover:bg-background"
                onClick={handleRemoveImage}
                aria-label="Remove image"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-sm font-medium text-muted-foreground">
                {fileName}
              </p>
              <Button variant="outline" onClick={resetFilters} className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" /> Reset Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {FILTERS.map((filter) => (
                <div key={filter.property} className="space-y-2">
                  <Label htmlFor={filter.property} className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    {filter.name}: {filters[filter.property]}{filter.unit}
                  </Label>
                  <Slider
                    id={filter.property}
                    min={filter.min}
                    max={filter.max}
                    step={filter.step}
                    value={[filters[filter.property]]}
                    onValueChange={(value) => handleFilterChange(filter.property, value)}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
