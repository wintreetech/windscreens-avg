import React from "react";

function StepDot({ active }) {
	return (
		<span className="h-14 w-14 relative overflow-hidden shrink-0">
			<span
				className={`absolute left-[9px] top-[9px] h-9 w-9 rounded-full ${
					active ? "bg-emerald-900" : "bg-neutral-200"
				}`}
			/>
		</span>
	);
}

function FakeInput({ label, rightIcon }) {
	return (
		<div className="w-full p-6 bg-zinc-100 flex items-center gap-2.5">
			<span className="flex-1 text-black/50 text-base sm:text-lg">{label}</span>
			{rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
		</div>
	);
}

function CaretDown() {
	return (
		<span className="h-6 w-6 relative overflow-hidden">
			<span className="absolute left-[6px] top-[9px] w-3 h-1.5 border-[1.5px] border-emerald-900" />
		</span>
	);
}

function ToggleCircle() {
	return (
		<span className="h-6 w-6 relative overflow-hidden">
			<span className="absolute left-[4px] top-[4px] h-4 w-4 rounded-full border border-black/50 bg-white" />
		</span>
	);
}

function UpDown() {
	return (
		<span className="h-6 w-6 relative overflow-hidden">
			<span className="absolute left-[6px] top-[14px] w-3 h-1.5 border-[1.5px] border-emerald-900" />
			<span className="absolute left-[6px] top-[3px] w-3 h-1.5 border-[1.5px] border-emerald-900" />
		</span>
	);
}

export default function TradeAccountApplication({ step = 1, onStepChange }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10 lg:gap-16 items-start">
			{/* LEFT PANEL */}
			<div className="flex flex-col gap-10">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl text-emerald-900 max-w-[557px]">
					Trade Account Application
				</h2>

				{/* vertical line */}
				<div className="hidden lg:block h-20 w-0 border-l-[5px] border-neutral-200 ml-7" />

				<div className="flex flex-col gap-8">
					<div className="flex items-center gap-4">
						<StepDot active={step === 1} />
						<p className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium">
							Business Contact information
						</p>
					</div>

					<div className="flex items-center gap-4">
						<StepDot active={step === 2} />
						<p
							className={`text-2xl sm:text-3xl lg:text-4xl font-medium ${
								step === 2 ? "text-black" : "text-black/50"
							}`}
						>
							Company Information
						</p>
					</div>
				</div>
			</div>

			{/* RIGHT FORM CARD */}
			<div className="bg-white p-6 sm:p-8 flex flex-col gap-4">
				<FakeInput label="Trading Address:" />
				<FakeInput label="Street Address" />
				<FakeInput label="Address Line 2" />

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<FakeInput label="City" />
					<FakeInput label="County / State / Region" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<FakeInput label="ZIP / Postal Code" />
					<FakeInput label="Country" rightIcon={<CaretDown />} />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<FakeInput label="Invoice Email:" />
					<FakeInput
						label="Is a Purchase Order Required?"
						rightIcon={<ToggleCircle />}
					/>
				</div>

				<FakeInput label="Statement Email:" />

				<div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<FakeInput label="Accounts Contact Person:" />
						<FakeInput label="Accounts Contact Email:" />
					</div>
					<FakeInput label="Accounts Contact Phone Number:" />
				</div>

				<div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<FakeInput label="Fleet Contact Person:" />
						<FakeInput label="Fleet Contact Email:" />
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<FakeInput label="Fleet Contact Phone Number:" />
						<FakeInput label="Fleet Size:" rightIcon={<UpDown />} />
					</div>
				</div>

				<div className="pt-4">
					<button
						type="button"
						onClick={() => onStepChange?.(step === 1 ? 2 : 1)}
						className="px-6 py-4 bg-emerald-900 text-white text-base sm:text-lg inline-flex items-center justify-center"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
