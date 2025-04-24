"use client";

import { joynWaitlistAction as joinWaitlist } from "@/actions/waitlist-action";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export default function WaitlistForm() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const validateEmail = (email: string) => {
		return z.string().email().safeParse(email);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			toast.error("Please enter your email address");
			return;
		}

		if (!validateEmail(email).success) {
			toast.error("Please enter a valid email address");
			return;
		}

		setIsLoading(true);

		try {
			const result = await joinWaitlist(email);

			if (result.failure) {
				throw new Error(result.failure);
			}

			toast.success("Successfully joined the waitlist!");
			setEmail("");
		} catch (error) {
			toast.error("Failed to join waitlist. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-1">
			<p>Sign the waitlist:</p>
			<div className="flex gap-2">
				<input
					type="email"
					placeholder="Enter your Email"
					className="border px-2 text-black py-0.5 dark:text-white outline-none focus:bg-neutral-100 bg-neutral-50 border-neutral-300"
					onChange={(e) => setEmail(e.target.value)}
					disabled={isLoading}
					value={email}
				/>
				<Button
					type="submit"
					size="sm"
					className="rounded-none"
					disabled={isLoading}
				>
					{isLoading ? "Joining..." : "Join"}
				</Button>
			</div>
		</form>
	);
}
