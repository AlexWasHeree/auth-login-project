import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 px-4 py-3 rounded bg-gray-500 w-full focus-within:ring-2 ring-purple-700">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-300">{props.children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-300 text-md placeholder:text-gray-300 outline-none"
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};