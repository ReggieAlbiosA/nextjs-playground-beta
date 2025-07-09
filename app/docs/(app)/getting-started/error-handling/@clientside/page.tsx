'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { UploadCloud, X, AlertTriangle } from 'lucide-react';

const MAX_FILE_SIZE_KB = 100;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_KB * 1024;

export default function ImageUploadDemo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (files: FileList | null) => {
    setError(null); // Clear previous error
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];

    // Validation 1: File Type
    if (!file.type.startsWith('image/')) {
      setError('Invalid file type. Please upload an image.');
      clearFile(true); // Clear the invalid file but keep the error
      return;
    }

    // Validation 2: File Size
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size exceeds the limit of ${MAX_FILE_SIZE_KB}KB.`);
      clearFile(true); // Clear the invalid file but keep the error
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files);
    }
  };
  
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const clearFile = (keepError = false) => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (!keepError) {
      setError(null);
    }
    if(inputRef.current) {
        inputRef.current.value = "";
    }
  }

  return (
    <Card className="bg-background/50 h-auto">
      <CardHeader>
        <CardTitle>Client-Side Error - Expected Error</CardTitle>
        <CardDescription>
          This component demonstrates how to handle client-side validation. Try uploading a non-image file or an image larger than 100KB to see the conditional error message.
        </CardDescription>
      </CardHeader>
      <CardContent className='h-auto'>
        <div 
            className={`relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed h-[500px] rounded-lg transition-colors ${dragActive ? 'border-primary bg-primary/10' : 'border-border'} ${error ? 'border-destructive' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <Input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files)}
                accept="image/*"
            />
            
            {previewUrl && selectedFile ? (
                <div className="text-center">
                    <Image src={previewUrl} alt="Preview" width={200} height={200} className="max-h-40 mx-auto mb-4 rounded-lg"/>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-sm font-medium">{selectedFile.name}</p>
                        <Button variant="ghost" size="icon" onClick={() => clearFile()} className="h-6 w-6">
                            <X className="h-4 w-4"/>
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Success! This image is valid.
                    </p>
                </div>
            ) : (
                <div className="text-center">
                    <UploadCloud className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="mb-2 text-sm font-semibold">Drag & drop an image here</p>
                    <p className="mb-4 text-xs text-muted-foreground">or</p>
                    <Button onClick={onButtonClick} variant="outline">
                        Browse Files
                    </Button>
                    <p className="mt-4 text-xs text-muted-foreground">
                        (Max {MAX_FILE_SIZE_KB}KB, images only)
                    </p>
                </div>
            )}
        </div>
        {error && (
          <div className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-lg flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
