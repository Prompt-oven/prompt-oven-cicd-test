import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface StarRatingReadOnlyProps {
  value: number;
}

export default function StarRatingReadOnly({ value }: StarRatingReadOnlyProps) {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="half-rating-read"
        defaultValue={value}
        precision={0.5}
        readOnly
        icon={<span className="text-[#facc29] text-xl">★</span>} // 채워진 별 색상 (노란색)
        emptyIcon={<span className="text-[#e4e4e4] text-xl">★</span>} // 비어있는 별 색상 (회색)
      />
    </Box>
  );
}
