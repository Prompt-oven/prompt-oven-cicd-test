import React from "react"
import BestSellerSelector from "@/components/main/atom/BestSellerSelector.tsx"
import BestSeller from "@/components/main/molecule/BestSeller.tsx"

interface BestSellerFilterProps {
	sellers: {
		number?: number
		nickname?: string
		earnings?: number
		isVerified?: boolean
		sellerImage?: string
	}[]
}
// todo - API 적용 시에 selector의 변경에 따라 다른 데이터를 보여주도록 수정, 현재는 더미 데이터로 구현
function BestSellerFilter({ sellers }: BestSellerFilterProps) {
	return (
		<div className="mx-auto w-full max-w-[1420px]">
			<div className="mb-8 flex flex-row items-center justify-between gap-4 sm:!gap-0">
				<h2 className="flex items-center gap-2 text-[28px] font-semibold text-white sm:text-[32px] lg:text-[38px]">
					Best sellers
				</h2>
				<BestSellerSelector />
			</div>

			<div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{sellers.map((seller, index) => (
					<BestSeller
						key={seller.number}
						number={index + 1}
						nickname={seller.nickname}
						earnings={seller.earnings}
						isVerified={seller.isVerified}
					/>
				))}
			</div>
		</div>
	)
}

export default BestSellerFilter
