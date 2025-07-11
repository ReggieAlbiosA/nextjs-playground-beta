'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const frameworks = [
  {
    value: 'Preview',
    label: 'Preview',
  },
  {
    value: 'Architecture',
    label: 'Architecture',
  },
  {
    value: 'Codebase',
    label: 'Codebase',
  },
];

export function ComboboxLayout({ 
  value,
  onValueChange,
  codebaseLink,
  officialDocsLink
}: { 
  value: string;
  onValueChange: (value: string) => void;
  codebaseLink?: string;
  officialDocsLink?: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (currentValue: string) => {
    setOpen(false);
    if (currentValue === 'Codebase' && codebaseLink) {
      window.open(codebaseLink, '_blank');
    } else {
      onValueChange(currentValue);
    }
  };

  return (
        <div className="flex items-center justify-between">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[160px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className="max-w-[160px] p-0">

          <Command>
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === framework.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>


      </PopoverContent>
    </Popover>
         <a
          href={officialDocsLink}
          target="_blank"
          className="text-blue-600 text-[clamp(10px,3vw,12px)] whitespace-nowrap dark:text-blue-400 font-medium hover:opacity-100"
        >
          - Official Nextjs Docs
        </a>
        </div>
  );
}