import {classNames} from '@/util/helpers/helper-functions'
import {StarIcon} from '@heroicons/react/solid'
import Link from 'next/link'

interface IProps {
	name: string
	average: number
	total: number
}

const LandlordInfo = ({name, average, total}: IProps) => {
	return (
		<div className="w-full border-b border-b-gray-200 pb-4">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">
				{name}
			</h2>

			<div className="mt-3 flex items-center">
				<div>
					<div className="flex items-center">
						{[0, 1, 2, 3, 4].map((rating) => (
							<StarIcon
								key={rating}
								className={classNames(
									average > rating ? 'text-yellow-400' : 'text-gray-300',
									'h-5 w-5 flex-shrink-0',
								)}
								aria-hidden="true"
							/>
						))}
					</div>
					<p className="sr-only">{average} out of 5 stars</p>
				</div>
				<p className="ml-2 text-sm text-gray-900">Based on {total} reviews</p>
			</div>
			<div className="mt-10">
				<h3 className="text-lg font-medium text-gray-900">
					Share your thoughts
				</h3>
				<p className="mt-1 text-sm text-gray-600">
					If you&apos;ve rented from this Landlord, share your experience with
					other tenants
				</p>

				<Link href="/create-review">
					<p className="mt-2 inline-flex cursor-pointer items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
						Submit a review
					</p>
				</Link>
			</div>
		</div>
	)
}

export default LandlordInfo