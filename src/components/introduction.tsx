"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";

export default function Introduction() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			Selfmail is an{" "}
			<Link
				href="https://github.com/selfmail/selfmail"
				target="_blank"
				rel="noreferrer"
				className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
			>
				open-source
			</Link>{" "}
			email provider that allows you to send and receive emails from your
			browser, secured and with a (really) nice interface.{" "}
			<span
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={() => setIsOpen(!isOpen)}
				className={cn("text-neutral-500 cursor-pointer", isOpen && "hidden")}
			>
				Read More
			</span>{" "}
			{isOpen && (
				<>
					I (
					<Link
						href="https://henri.is"
						target="_blank"
						className="text-neutral-500"
					>
						henri
					</Link>
					) am working on this project for the last year.{" "}
					<span
						onClick={() => setIsOpen(!isOpen)}
						onKeyDown={() => setIsOpen(!isOpen)}
						className={cn("text-neutral-500 cursor-pointer")}
					>
						Read Less
					</span>{" "}
				</>
			)}
		</>
	);
}
