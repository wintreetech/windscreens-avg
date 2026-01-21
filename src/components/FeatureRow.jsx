export default function FeatureRow({ icon, title }) {
	return (
		<div className="flex items-center gap-4">
			<div className="h-12 w-12 rounded-xl bg-green-600/10 flex items-center justify-center">
				{icon ? icon : <span className="h-5 w-5 rounded bg-green-600" />}
			</div>
			<p className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
				{title}
			</p>
		</div>
	);
}
