"use server";

import { db } from "@/lib/db";
import { z } from "zod";

export async function joynWaitlistAction(email: string) {
	const schema = z.string().email();

	const parse = schema.safeParse(email);

	if (!parse.success) {
		return { failure: parse.error.message };
	}

	// add user to waitlist
	const user = await db.waitlistUser.create({
		data: {
			email: parse.data,
		},
	});

	if (!user) {
		return {
			failure: "Failed to add user to waitlist",
		};
	}

	return {
		success: true,
	};
}
