import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"

interface StarRatingReadOnlyProps {
	value: number
}

export default function StarRatingReadOnly({ value }: StarRatingReadOnlyProps) {
	return (
		<Box sx={{ "& > legend": { mt: 2 } }}>
			<Rating
				name="half-rating-read"
				defaultValue={value}
				precision={0.5}
				readOnly
				icon={<span className="text-xl text-[#facc29]">★</span>} // 채워진 별 색상 (노란색)
				emptyIcon={<span className="text-xl text-[#e4e4e4]">★</span>} // 비어있는 별 색상 (회색)
			/>
		</Box>
	)
}
