import { UserAccountType } from '@/schema/AuthAccountSchema';

export const signUpAction = async (data: UserAccountType): Promise<Response> => {
    try {
        const response = await fetch(`http://15.164.251.81:8000/v1/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
  
        if (!response.ok) {
            const errorData = await response.json();
            console.error(`에러 상태 코드: ${response.status}, 메시지: ${errorData.message}`);
        }
  
        return response;
    } catch (error) {
        console.error("회원가입 요청 중 네트워크 오류 발생:", error);
        throw new Error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };