import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'utsavgupta31122004@gmail.com',
            to: email,
            subject: 'Mystry Message | Verification code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return { success: true, message: 'Verification email successfully sent' }
    } catch (emailError) {
        console.log('error sending email', emailError)
        return { success: false, message: 'Failed to send verification email' }
    }
}