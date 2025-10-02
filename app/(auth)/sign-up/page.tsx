'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import {signUpWithEmail} from "@/lib/actions/auth.actions";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'IN',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        try {
            const result = await signUpWithEmail(data);
            if(result.success){
                toast.success('Sign up successful',{
                    description: 'You have successfully signed in to your account',
                });
                router.push('/');
            }else{
                toast.error('Sign up failed',{
                    description: result.error
                });
            }
        } catch (err) {
            console.log(err);
            toast.error('Sign up failed',{
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
            });
        }
    }
    return (
        <>
            <div className='flex justify-between items-start'>
                <h1 className='form-title'>Sign up & Personalize</h1>
                <FooterLink text='Already have an account?' linkText='Sign In' href='/sign-in' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField
                    name='fullName'
                    label='Full Name'
                    placeholder='John Doe'
                    register={register}
                    error={errors.fullName}
                    validation={{required: 'Full name is required', minLength: {value: 3, message: 'Full name must be at least 3 characters long' }}}/>
                <InputField
                    name='email'
                    label='Email'
                    placeholder='johndoe@gmail.com'
                    register={register}
                    error={errors.email}
                    validation={{required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address'}}}/>
                <InputField
                    name='password'
                    label='Password'
                    placeholder='Enter a strong password'
                    type='password'
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: {value: 8, message: 'Password must be at least 8 characters long'}}}/>
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />
                <SelectField
                    name='investmentGoals'
                    label='Investment Goals'
                    placeholder='Select your investment goals'
                    options={INVESTMENT_GOALS}
                    control={control}
                    required
                    error={errors.investmentGoals} />
                <SelectField
                    name='riskTolerance'
                    label='Risk Tolerance'
                    placeholder='Select your risk level'
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    required
                    error={errors.riskTolerance} />
                <SelectField
                    name='preferredIndustry'
                    label='Preferred Industry'
                    placeholder='Select your preferred industry'
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    required
                    error={errors.preferredIndustry} />
                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Creating account...' : 'Start Your Investing Journey'}
                </Button>
            </form>
        </>
    )
}
export default Page
