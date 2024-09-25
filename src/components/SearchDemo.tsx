import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface InputDemoProps {
    placeholder?: string;
    containerClassName?: string;
    className?: string;
}
export default function SearchDemo(props: InputDemoProps) {
    const { placeholder, className, containerClassName } = props;

    return (
        <div className={cn('relative w-full h-full', containerClassName)}>
            <Search className='absolute -translate-y-1/2 left-4 size-5 top-1/2' />
            <Input className={cn(`w-full h-full rounded-[10px] pl-12  text-sm text-black  placeholder:text-black !font-open_sans`, className)} placeholder={placeholder} />
        </div>
    )
}
