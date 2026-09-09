'use client';

import { MOCK_USERS } from "../../../../components/UserProfilesList";
import { useParams, useRouter } from "next/navigation";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "../../../../../components/ui/dialog";
import { UserProfileDetails } from "../../../../components/UserProfileDetails";

export default function UserModal() {
	const router = useRouter();
	const { id } = useParams();
	
	const user = MOCK_USERS.find((u) => u.id === id);

	if (!user) return null;

	return (
		<Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
			<DialogContent className="p-0 overflow-hidden bg-transparent border-none shadow-none max-w-xl">
				<DialogHeader className="sr-only">
					<DialogTitle>Profil użytkownika</DialogTitle>
				</DialogHeader>
				<UserProfileDetails user={user} />
			</DialogContent>
		</Dialog>
	);
}