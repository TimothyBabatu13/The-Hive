import { cn } from '@/lib/utils';
import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

interface CentralNodeProps {
  data: {
    label: string;
  };
}

interface Props {
    className?: string,
    showText?: boolean
}


const Logo: React.FC<Props> = ({ className, showText = false }) => {
    return (
        <div className="flex items-center gap-2">
            <Image 
                src="/logo-dark.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 hidden dark:block", className)} 
            />
            <Image 
                src="/logo-light.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 block dark:hidden", className)} 
            />
            {showText && (
                <span className="text-lg font-bold">
                    The Hive
                </span>
            )}
        </div>
    )
}


const CentralNode = ({ }: CentralNodeProps) => {
  return (
    <div className="p-8 rounded-full border-2 border-brand-600 bg-[#4f3e17] z-[100] shadow-brand-600/40 shadow-lg">
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-violet-500" />
      <div className="flex items-center justify-center">
        <Logo className="w-32 h-32" />
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CentralNode; 