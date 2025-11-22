'use client'

import {useForm, SubmitHandler, Controller} from "react-hook-form"
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import FooterLink from "@/components/forms/FooterLink";
import {z} from "zod";
import {signUpSchema} from "@/lib/schemas.zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import {signUpWithEmail} from "@/lib/actions/auth.actions";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
type SignUpSchema = z.infer<typeof signUpSchema>

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpSchema>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        resolver: zodResolver(signUpSchema),
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
        try {
            const result = await signUpWithEmail(data);
            if(result.success){
                toast.success('Account created successfully', {
                    description: 'Welcome👋'
                });
                router.push('/');
            }else{
                toast.error('Sign Up Failed',{
                    description: result.error ?? 'Failed to sign up. Please try again later.'
                })
            }
        } catch (error) {
            console.error('❌ Error signing up:', error);
        }
    }
    return (
        <main>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                />
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
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />
                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}
                </Button>
                <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />
            </form>
        </main>
    )
}
export default Page