import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { User } from "../types/User";
import { buttonVariants } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import Link from "next/link";
import PizzaIcon from "./PizzaIcon";

interface UserProfileCardProps {
	user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
	const { id, name, avatarUrl, role, likesPizza } = user;
	const fallbackAvatar: string = name.split(" ")[0][0] + name.split(" ")[1][0];
	const profileUrl: string = `/users/${id}`;

	return (
		<Card className="group @container relative mx-auto max-w-none w-full pt-4">
			<Avatar className="size-24 mx-auto @md:ml-(--card-spacing)">
				<AvatarImage src={avatarUrl} />
				<AvatarFallback className="uppercase">{fallbackAvatar}</AvatarFallback>
			</Avatar>

			<CardHeader className="grid-cols-1! text-center @md:text-left @md:grid-cols-[1fr_auto]">
				<div className="absolute right-3 top-3 @md:static">
					{likesPizza && (
						<div className="size-10 grid place-items-center rounded-full">
							<PizzaIcon />
						</div>
					)}
				</div>

				<CardTitle className="font-semibold text-xl">{name}</CardTitle>
				<CardDescription>{role}</CardDescription>
			</CardHeader>

			<CardFooter className="opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
				<Link
					className={buttonVariants({
						size: "lg",
						className: "w-full @md:w-fit",
					})}
					href={profileUrl}
				>
					See profile
				</Link>
			</CardFooter>
		</Card>
	);
}