'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import {toast} from "sonner";
import {signInWithEmail} from "@/lib/actions/auth.actions";
import {router} from "next/client";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        try {
            const result = await signInWithEmail(data);
            console.log(result);
            if(result.success) {
                toast.success('Sign in successful',{
                    description: 'You have successfully logged in to your account',
                });
                router.push('/');
            }else{
                toast.error('Sign in failed',{
                    description: result.error
                })
            }
        } catch (err) {
            console.log(err);
            toast.error('Sign in failed',{
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
            });
        }
    }
    return (
        <>
            <div className='flex justify-between items-start mt-20'>
                <h1 className='form-title'>Log In Your Account</h1>
                <FooterLink text='Dont have an account?' linkText='Sign Up' href='/sign-up' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
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
                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Logging In...' : 'Log In'}
                </Button>
            </form>
        </>
    )
}
export default Page
