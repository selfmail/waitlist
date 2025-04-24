import GitHub from "@/components/icons/github";
import XformerlyTwitter from "@/components/icons/x";
import Introduction from "@/components/introduction";
import WaitlistForm from "@/components/waitlist-form";
import {
	AccessibilityIcon,
	CircleDashedIcon,
	Paintbrush,
	Plus,
	ShieldCheck,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Selfmail – Waitlist",
	description:
		"Selfmail is an open-source email provider that allows you to send and receive emails from your browser, secured and with a (really) nice interface.",
};

export default function Waitlist() {
	return (
		<div className="flex justify-center py-5 md:py-10 lg:py-24">
			<div className="grid grid-cols-2 border border-neutral-200 mx-5 sm:mx-10 md:w-[500px]">
				<div className="col-span-2 flex items-center justify-center h-12 border border-neutral-200">
					<h2 className="text-xl font-medium">Selfmail</h2>
				</div>
				<div className="col-span-2 flex p-1 border border-neutral-200">
					<p>
						<Introduction />
					</p>
				</div>
				<div className="col-span-2">
					<Image
						src="/screenshot-selfmail.png"
						alt="Selfmail screenshot"
						width={500}
						height={300}
					/>
				</div>
				<div className="col-span-1 flex space-x-2 border border-neutral-200 h-12 w-full items-center justify-center">
					<ShieldCheck className="size-4" />
					<p>Privacy first</p>
				</div>
				<div className="col-span-1 flex space-x-2 border border-neutral-200 h-12 w-full items-center justify-center">
					<AccessibilityIcon className="size-4" />
					<p>Accessible everywhere</p>
				</div>
				<div className="col-span-1 flex space-x-2 border border-neutral-200 h-12 w-full items-center justify-center">
					<Users className="size-4" />
					<p>Ready for teams</p>
				</div>
				<div className="col-span-1 flex space-x-2 border border-neutral-200 h-12 w-full items-center justify-center">
					<Paintbrush className="size-4" />
					<p>Customizable</p>
				</div>
				<div className="col-span-2 p-2 border border-neutral-200">
					<h2 className="text-lg flex items-center space-x-2">
						<CircleDashedIcon className="size-4" />
						<span>Progress in Development</span>
					</h2>
					<ul>
						<li className="list-disc list-inside">
							(almost done) Setup SMTP-Server
						</li>
						<li className="list-disc list-inside">
							(done) Manage Authentication
						</li>
						<li className="list-disc list-inside">
							(done) Create the Waitlist
						</li>
						<li className="list-disc list-inside">Implement Analytics</li>
						<li className="list-disc list-inside">Create Dashboard Design</li>
						<li className="list-disc list-inside">Create an API</li>
						<li className="list-disc list-inside">Writing the docs</li>
						<li className="list-disc list-inside">
							(future) Creating mobile app
						</li>
					</ul>
					<hr className="text-neutral-200 my-2" />

					<p>
						A little disclaimer: the project is still in development – even
						though I'm working very hard on it, I can't promise a launch, a date
						for the beta version, or anything like that. I'm a student and I
						have so much to do – for school and for my life.
					</p>
				</div>
				<div className="col-span-2 h-24 flex items-center border border-neutral-200 justify-center">
					<WaitlistForm />
				</div>
				<Link
					href="https://git.new/selfmail"
					target="_blank"
					className="col-span-1 flex hover:bg-neutral-100 items-center justify-center space-x-2 h-12 border border-neutral-200"
				>
					<GitHub /> <span>GitHub</span>
				</Link>
				<Link
					href="#"
					target="_bank"
					className="col-span-1 flex hover:bg-neutral-100 items-center justify-center space-x-2 h-12 border border-neutral-200"
				>
					<XformerlyTwitter /> <sup>Coming soon</sup>
				</Link>
			</div>
		</div>
	);
}
