import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'flpfilipe19@gmail.com',
        pass: process.env.PASS
    }
});

export default function handler(req, res) {
    const { body, method } = req
    const bodyData = JSON.parse(body)

    if (method !== 'POST') {
        return res.status(405)
    }

    const mailConfig = {
        from: 'flpfilipe19@gmail.com',
        to: ['gnr_filipe@hotmail.com', 'contato@estefanemedeiros.com'],
        replyTo: bodyData.email,
        subject: `Contato do ${bodyData.name} - ${bodyData.whatsapp} - ${bodyData.locality}`,
        text: bodyData.message,
    };

    transport.sendMail(mailConfig, function (error) {
        if (error) {
            res.json({
                status: 400,
                error: error
            })
        } else {
            res.json({
                status: 200
            });
        }
    });
}
