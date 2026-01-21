import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen font-henju bg-white overflow-x-hidden">
			{/* Sticky Header */}
			<header className="sticky top-0 z-50">
				<Header />
			</header>

			{/* Page Content */}
			<main className="flex-1 w-full">
				<Outlet /> {/* This renders the page inside the layout */}
			</main>

			{/* Footer */}
			<Footer />

			{/* Ensure scroll position is restored on navigation */}
			<ScrollRestoration />
		</div>
	);
}
