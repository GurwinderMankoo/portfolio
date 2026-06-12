import { emailRegx } from "@/app/components/common/global";
import type { ContactErrors } from "@/app/components/contact/CustomForm";
import { transport, mailOptions } from "@/app/config/nodemailer";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const {email, subject, message} = await req.json();
        const errors: Partial<ContactErrors> = {}
        if(!email) {
            errors.email = 'This field is required'
        } else if(!emailRegx.test(email)){
            errors.email = 'Please enter a valid email'
        }
        if(!subject) {
            errors.subject = 'This field is required'
        }
        if(!message) {
            errors.message = 'This field is required'
        }
        if(Object.keys(errors).length > 0) {
            return NextResponse.json({ ...errors }, { status: 422 })
        }
        await transport.sendMail({
            ...mailOptions,
            subject,
            text: `Email: ${email}\n\nMessage:\n ${message}
            `
        })

        return NextResponse.json('Sumitted Successfully!!')
    } catch (error: any) {
        console.log(error)

        return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
    }
}
