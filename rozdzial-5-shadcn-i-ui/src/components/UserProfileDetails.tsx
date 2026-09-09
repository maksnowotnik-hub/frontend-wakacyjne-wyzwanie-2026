import { User } from "../types/User";
import PizzaIcon from "./PizzaIcon";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

interface UserProfileDetailsProps {
	user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
	const { name, role, likesPizza, avatarUrl, description } = user;
	const fallbackAvatar = name.split(" ")[0][0] + name.split(" ")[1][0];

	return (
		<Card className="@container relative max-w-full h-full flex flex-col min-h-64 overflow-hidden border-none shadow-none">
			<div className="relative w-full h-32 @lg:h-48">
				<div className="absolute inset-0 z-1 bg-blue-300" />
				<Avatar className="rounded-full size-16 @lg:size-24 absolute z-2 bottom-0 left-4 translate-y-1/2 border-2 border-white shadow-md">
					<AvatarImage src={avatarUrl} alt="avatar" className="object-cover" />
					<AvatarFallback className="uppercase">{fallbackAvatar}</AvatarFallback>
				</Avatar>
			</div>

			<CardHeader className="grid grid-cols-2 p-4 pt-12 @lg:pt-16">
				{likesPizza && (
					<div className="ml-auto row-span-2 col-start-2 size-10 grid place-items-center rounded-full">
						<PizzaIcon />
					</div>
				)}
				<CardTitle className="row-start-1 col-start-1 font-semibold text-xl @md:text-2xl">
					{name}
				</CardTitle>
				<CardDescription className="row-start-2 col-start-1">
					{role}
				</CardDescription>
			</CardHeader>

			<CardContent className="p-4 pt-0">
				<p className="text-muted-foreground @lg:max-w-md">{description}</p>
			</CardContent>
		</Card>
	);
}