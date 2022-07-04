import React, {useState} from 'react'
import Button from '../ui/button'
import ButtonLight from '../ui/button-light'

//This components will hold the review form and it's data handling logic
//Completed reviews should be sent to the backend with a success confirmation for the user (maybe need a Modal?)
//Once completed, it should give an option to reset the form for another review or direct Client to Reviews page

const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/
const postalRegex =
	/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i

//TODO hook up with backend
//TODO create error handling for regex tests

function ReviewForm(): JSX.Element {
	const [landlord, setLandlord] = useState('')
	const [country, setCountry] = useState('Canada')
	const [city, setCity] = useState('')
	const [province, setProvince] = useState('')
	const [postal, setPostal] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (country === 'United States') {
			if (!zipRegex.test(postal)) {
				//Set error message for Postal
			}
		} else {
			if (!postalRegex.test(postal)) {
				//set error message for postal
			}
		}
		console.log('landlord: ', landlord)
		console.log('country: ', country)
		console.log('city: ', city)
		console.log('province: ', province)
		console.log('postal: ', postal)

		//This is for the eventual call to the backend
		// const body = {
		// 	landlord: landlord,
		// 	country: country,
		// 	city: city,
		// 	province: province,
		// 	postal: postal
		// }
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-8 divide-y divide-gray-200"
		>
			<div className="space-y-8 divide-y divide-gray-200">
				<div className="pt-8">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Landlord/Property Management Information
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							Please make sure all this information matches your Lease
						</p>
					</div>
					<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="landlord"
								className="block text-sm font-medium text-gray-700"
							>
								Landlord/Property Management Company
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="landlord"
									id="landlord"
									required
									placeholder="Landlord/Property Management"
									onChange={(e) => setLandlord(e.target.value)}
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="country"
								className="block text-sm font-medium text-gray-700"
							>
								Country
							</label>
							<div className="mt-1">
								<select
									id="country"
									name="country"
									required
									onChange={(e) => setCountry(e.target.value)}
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								>
									<option>Canada</option>
									<option>United States</option>
								</select>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="city"
								className="block text-sm font-medium text-gray-700"
							>
								City
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="city"
									id="city"
									placeholder="City"
									required
									onChange={(e) => setCity(e.target.value)}
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="region"
								className="block text-sm font-medium text-gray-700"
							>
								State / Province
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="region"
									id="region"
									placeholder="State/Province"
									onChange={(e) => setProvince(e.target.value)}
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="postal-code"
								className="block text-sm font-medium text-gray-700"
							>
								ZIP / Postal code
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									placeholder="Postal Code / ZIP"
									required
									onChange={(e) => setPostal(e.target.value)}
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-5">
				<div className="flex justify-end">
					<ButtonLight>Reset</ButtonLight>
					<Button>Submit</Button>
				</div>
			</div>
		</form>
	)
}

export default ReviewForm
