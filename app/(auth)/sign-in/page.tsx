'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import FooterLink from '@/components/forms/FooterLink';
import {useRouter} from "next/navigation";
import {z} from "zod";
import {signInSchema} from "@/lib/schemas.zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInWithEmail} from "@/lib/actions/auth.actions";
import {toast} from "sonner";

type SignInSchema = z.infer<typeof signInSchema>

const SignIn = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchema>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(signInSchema),
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            const result = await signInWithEmail(data);
            if(result.success){
                toast.success('Logged in successfully', {
                    description: 'Welcome👋'
                });
                router.push('/');
            }else{
                toast.error('Sign In Failed',{
                    description: result.error ?? 'Failed to sign in. Please try again later.'
                })
            }
        } catch (error) {
            console.error("❌ Error signing in: ",error);
        }
    }

    return (
        <>
            <h1 className="form-title">Welcome back</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    register={register}
                    error={errors.email}
                />
                <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter a secure password"
                    register={register}
                    error={errors.password}
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Sign In'}
                </Button>
                <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
            </form>
        </>
    );
};
export default SignIn;