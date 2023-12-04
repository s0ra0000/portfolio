import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    const { email,name,subject, message }: {email:string;name:string; subject:string; message:string} = await req.json()
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:SMTP_EMAIL,
            pass:SMTP_PASSWORD
        }
    });
    try{
        const testResult = await transport.verify();
        console.log(testResult)
        
    }
    catch(error){
        console.log(error)
        return;
    }

    try{
        const sendResult = await transport.sendMail({
            from:name,
            to:SMTP_EMAIL,
            subject: `Message from (${email}) ${subject}`,
            text:message,
        });
        console.log(sendResult)
        return NextResponse.json({ message: "Success!", status: 200 })
    }catch(error){
        console.log(error);
        return NextResponse.json({ message: "Failed!", status: 500 })
    }
}