export interface PromptReviewType {
	content: ReviewContentType[]
	lastCreatedAt: string // ISO 8601 형식의 날짜 문자열
	lastId: number // 마지막 ID
	hasNext: boolean // 다음 페이지 존재 여부
	pageSize: number // 페이지 크기
	page: number // 현재 페이지 번호
}

export interface ReviewContentType {
	id: number // 리뷰 ID
	productUuid: string // 제품 UUID
	content: string // 리뷰 내용
	createdAt: string // 생성 일자 (ISO 8601 형식)
	updatedAt: string // 업데이트 일자 (ISO 8601 형식)
	memberUuid: string // 회원 UUID
	memberProfileImage: string | undefined // 회원 프로필
	memberNickname: string //회원 별칭
}
