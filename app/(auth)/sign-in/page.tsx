'use client'

import {useForm, SubmitHandler} from "react-hook-form"
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";

const Page = () => {
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
            console.log(data);
        } catch (err) {
            console.log(err);
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
                    validation={{required: 'Password is required', minLength: 8}}/>
                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Logging In...' : 'Log In'}
                </Button>
            </form>
        </>
    )
}
export default Page
