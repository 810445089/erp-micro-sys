
export interface MetaProps {
    keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteProps {
    // caseSensitive?: boolean;
	children?: RouteProps[] | undefined;
	// element?: React.ReactNode;
	// index?: boolean;
	// path?: string;
	meta?: MetaProps;
	// isLink?: string;
}