import { Metadata } from "next";
import RegistrationForm from "./register.form";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Registration",
    description: "Register an account"
}

const LoginPage = () => {
    return (
        <div className="container relative h-screen flex-col items-center justify-center min-[320px]:flex sm:flex md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    👻 HRMS Prototype
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo;
                        </p>
                        <footer className="text-sm">- HRMS Team</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {`We're thrilled to have you here! Sign up to unlock amazing features. 🚀`}
                        </p>
                    </div>
                    <RegistrationForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
						<Link
							href="/login"
							className="hover:text-brand underline underline-offset-4"
						>
							{`Already have an account? Log in here!`}
						</Link>
					</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage