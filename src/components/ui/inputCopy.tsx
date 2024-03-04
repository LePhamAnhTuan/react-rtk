import React from 'react';
import { Input } from './input';
import { CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InputCopyProps {
	value: any;
	className?: string;
}
export const InputCopy = ({ value, className, ...props }: InputCopyProps) => {
	const [copied, setCopied] = React.useState(false);
	const [copiedText, setCopiedText] = React.useState('');
	const ref = React.useRef<HTMLInputElement>(null);
	const copy = () => {
		if (ref.current) {
			ref.current.select();
			document.execCommand('copy');
			setCopied(true);
			setCopiedText(ref.current.value);
		}
	};
	React.useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 1500);
		}
	}, [copied]);
	return (
		<div className={cn('relative m-2 inline-block', className)}>
			<Input
				ref={ref}
				type="text"
				className="w-full font-bold border border-gray-300 rounded-lg mr-4 h-7"
				// className={className}
				value={value}
				readOnly
				// {...props}
			/>
			<div
				onClick={copy}
				className="absolute top-0 right-0 p-[2px] text-[10px] text-center bg-gray-300 rounded-lg w-[30px] h-[20px] cursor-pointer"
			>
				{copied ? (
					<CheckCheck
						width={15}
						height={15}
						className="flex justify-center items-center text-green-500 ml-1"
					/>
				) : (
					'Copy'
				)}
			</div>
		</div>
	);
};
