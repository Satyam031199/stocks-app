import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

const InputField = ({name, type= 'text', error, label, placeholder, register, value, validation, disabled}: FormInputProps) => {
    return (
        <div className='space-y-2'>
            <Label htmlFor={name} className='form-label'>
                {label}
            </Label>
            <Input
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                autoComplete='on'
                className={cn('form-input', disabled && 'opacity-50 cursor-not-allowed')}
                {...register(name, validation)} />
            {error && <p className='text-red-500 text-sm'>{error.message}</p>}
        </div>
    )
}
export default InputField
