import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
	const err = useRouteError();

	return (
		<div className="min-h-[70vh] flex items-center justify-center px-6">
			<div className="max-w-xl text-center">
				<h1 className="text-4xl sm:text-5xl font-bold text-emerald-900">
					Page not found
				</h1>
				<p className="mt-4 text-lg text-black/70">
					{err?.statusText ||
						err?.message ||
						"The page you’re looking for doesn’t exist."}
				</p>

				<Link
					to="/"
					className="inline-flex mt-8 px-6 py-3 rounded-xl bg-emerald-900 text-white font-medium"
				>
					Go Home
				</Link>
			</div>
		</div>
	);
}
