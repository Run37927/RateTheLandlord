// TODO Add Submit Function
// TODO Hook up to BE
// TODO Add Success/Failure Notification

const MyInfo = () => {
	return (
		<form className="space-y-8 divide-y divide-gray-200 w-full container">
			<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
				<div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
					<div>
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							My Information
						</h3>
					</div>
					<div className="space-y-6 sm:space-y-5">
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Name
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									type="text"
									name="name"
									id="name"
									autoComplete="given-name"
									className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								Email address
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
							>
								New Password
							</label>
							<div className="mt-1 sm:col-span-2 sm:mt-0">
								<input
									type="text"
									name="password"
									id="password"
									className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-5">
				<div className="flex justify-end">
					<button
						type="submit"
						className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Save
					</button>
				</div>
			</div>
		</form>
	)
}

export default MyInfo
