import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAV_LINKS } from "@/src/config";

export function Navbar() {
	return (
		<div className="inset-0 py-6 grid place-items-center">
			<Tabs defaultValue="/">
				<TabsList>
					{NAV_LINKS.map((link) => (
						<TabsTrigger key={link.id} value={link.href} asChild>
							<Link href={link.href}>{link.title}</Link>
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}